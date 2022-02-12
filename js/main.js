class Glass {
  constructor(id, src, virtualImg, brand, ten, color, price, moTa) {
    this.id = id;
    this.src = src;
    this.virtualImg = virtualImg;
    this.brand = brand;
    this.name = ten;
    this.color = color;
    this.price = price;
    this.description = moTa;
  }
}
let GlassShow = new Glass();

let layGlass = () => {
  fetch("https://620274b3b8735d00174cbad6.mockapi.io/Glass")
    .then((Response) => Response.json())
    .then((data) => {
      console.log(data);
      hienThiGlass(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
layGlass();


let vglassesList = document.getElementById("vglassesList");
let hienThiGlass = (mang) => {
  for (let glass of mang) {
    vglassesList.innerHTML += `
    <button onclick="tryGlass()" class="btn btn-white vglasses__items col-4">              
        <img class="img-fluid" src="./img/${glass.src}">             
    </button>`;
  }
};


// let vglasses__items = document.getElementsByClassName('vglasses__items');
// for (let i = 0; i < vglasses__items.length; i++){
//   vglasses__items[i].addEventListener('click', ()=>{
//     tryGlass(vglasses__items[i]);
//   })
// }
let tryGlass = (i)=>{
  console.log("click ok");
  
}

