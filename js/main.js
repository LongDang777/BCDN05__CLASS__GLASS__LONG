import GlassesSer from "./GlassSer.js";
import Glass from "./Glass.js";

// let glassShow = new Glass();
let glassSer = new GlassesSer();
let glass = new Glass();
let vglassesList = document.getElementById("vglassesList");
let hienThiGlass = (mang) => {
  for (let glass of mang) {
    let { id, src, virtualImg, brand, ten, color, price, description } = glass;
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
      let { id, src, virtualImg, brand, name, color, price, description } =
        result.data;
      document.getElementById(
        "avatar"
      ).innerHTML = `<img class="img-fluid" src="./img/${virtualImg}">`;

      document.getElementById("glassesInfo").innerHTML = `
      <h4> ${name} - ${brand} (${color})</h4> 

        <button class="btn btn-danger mt-2 mr-3">$${price}</button 
        <p class=" alert-info text text-success">Stocking</p>
        <p>${description}</p>
      
    `;
    })
    .catch((err) => {
      console.log(err);
    });
};
window.getGlass = getGlass;
