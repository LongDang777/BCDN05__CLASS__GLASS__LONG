import GlassesSer from "./GlassSer.js";
import Glass from "./Glass.js";

let glassSer = new GlassesSer();
let vglassesList = document.getElementById("vglassesList");
let hienThiGlass = (mang) => {
  for (let glass of mang) {
    let { id, src } = glass;
    vglassesList.innerHTML += `
    <button onclick="getGlass('${id}')" class="btn btn-white col-4">              
        <img class="img-fluid" src="./img/${src}">             
    </button>`;
  }
};

let layDS = () => {
  glassSer
    .layDSGlass()
    .then((result) => {
      hienThiGlass(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
layDS();

let getGlass = (id) => {
  glassSer
    .xemGlass(id)
    .then((result) => {
      document.querySelector(".vglasses__info").style.display = "block";
      let {virtualImg, brand, name, color, price, description } =
        result.data;
      document.getElementById(
        "avatar"
      ).innerHTML = `<img class="img-fluid" src="./img/${virtualImg}">`;
      document.getElementById("glassesInfo").innerHTML = `
      <h4> ${name} - ${brand} (${color})</h4> 
        <button class="btn btn-danger mt-2 mr-3">$${price}</button 
        <p>Stocking</p>
        <p>${description}</p>`;
    })
    .catch((err) => {
      console.log(err);
    });
};
window.getGlass = getGlass;