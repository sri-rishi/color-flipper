const btnClick  =  document.getElementById("btn-click");
const simpleTypeBtn = document.getElementById("simple-type");
const hexTypeBtn = document.getElementById("hex-type")
const colorValue = document.querySelector(".color");

const colorArr = ["Aqua","#4a1c40" , "Blue", "#0a1931", "Fuchsia", "#ffc93c", "Gray", "#ff7b54", "Green", "#fad586", "Lime", "#301b3f" , "Maroon","#810000", "Navy", "#7eca9c", "Olive","#810034", "Purple","#da723c", "Red", "#ebd8b7", "Silver", "Teal", "White", "Yellow"]


const hexArr = ["#4a1c40" , "#0a1931", "#ffc93c", "#ff7b54", "#fad586",  "#301b3f", "#810000", "#7eca9c", "#810034", "#da723c", "#ebd8b7"]


let called = true;

const turnFalse = () => called = false;


const turnTrue = () => called = true;

const clickHandler = () => {
  let randomIndex = Math.floor(Math.random() * colorArr.length);

  let randomColor = colorArr[randomIndex];
  // console.log(randomColor);

  let randomHexIndex = Math.floor(Math.random() * hexArr.length);

  let randomHex = hexArr[randomHexIndex];
  document.body.style.backgroundColor = called === true ? randomColor : randomHex;
  colorValue.innerHTML = called === true ? randomColor : randomHex;
}


btnClick.addEventListener("click", clickHandler);
simpleTypeBtn.addEventListener("click", turnTrue);
hexTypeBtn.addEventListener("click", turnFalse);
