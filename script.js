// let loc = document.querySelector("#loc-opt");
// let color1 = linear-gradient(308deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%);
// let color2 = background: linear-gradient(308deg, rgba(110,0,74,1) 0%, rgba(121,9,51,1) 43%, rgba(255,0,164,1) 100%);
// let color3= background: linear-gradient(308deg, rgba(0,105,230,1) 0%, rgba(1,169,193,1) 43%, rgba(0,211,255,1) 100%);
// let random_color = [color1, color2, color3];

// let element = document.querySelector(".location");
// let colors = [
//     "linear-gradient(308deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)",
//     "linear-gradient(308deg, rgba(110,0,74,1) 0%, rgba(121,9,51,1) 43%, rgba(255,0,164,1) 100%)",
//     "linear-gradient(308deg, rgba(0,105,230,1) 0%, rgba(1,169,193,1) 43%, rgba(0,211,255,1) 100%)"
// ];
// let currentColorIndex = 0;

// setInterval(function() {
//     element.style.backgroundImage = colors[currentColorIndex];
//     currentColorIndex = (currentColorIndex + 1) % colors.length;
//     setTimeout(function() {
//         element.style.backgroundImage = colors[currentColorIndex];
//     }, 10);
// }, 1000);

// let priceBox = document.querySelector(".price");
// let inputBox = document.getElementById("input-in-box");

// function add() {
//   if (inputBox.value === "") {
//     // p.createTextNode("Cannot add blank text as a task!")
//     // append(p);
//     alert("idiniandni");
//   }
//   else {

//   }
// }
// }

const price = [3907000, 12000000, 6200000, 9500000, 5100000, 3800000, 20400000, 60000000, 6325000, 37000000, 7000000, 29500000, 3800000, 4000000, 14800000, 7350000, 4800000, 6000000, 29000000, 4800000, 1500000, 12200000, 38000000, 10300000, 2525000, 5600000, 2310000, 8100000, 4877000, 4700000, 18600000, 3500000, 12300000, 5739000, 12500000, 3600000, 4550000, 12500000, 5612000, 4500000, 8100000, 3800000, 3800000, 4800000, 9179000, 20000000, 3300000, 9482000, 13000000, 3600000, 5000000, 9900000, 9100000, 7500000, 7500000, 4400000, 19200000, 18500000, 15000000, 4500000, 24000000, 5500000, 65000000, 4400000, 14000000, 6200000, 4300000, 5700000, 8500000, 3668000, 10000000, 8058000, 10100000, 7000000, 14000000, 4823000, 4000000, 20500000, 2200000, 25000000, 10500000, 22450000, 7800000, 6080000, 10200000, 21000000, 8800000, 3700000, 5806000, 16000000, 7000000, 2888000, 7000000, 15500000, 8000000, 9000000, 24500000, 4800000, 6500000];
// let length = price.length;
// alert(length);
// 99

let randomPrice = function() {
  const randomIndex = Math.floor(Math.random() * price.length);
  return price[randomIndex];
}

let priceBox = document.querySelector(".price");
let inputBox = document.querySelector("#input-in-box");

document.querySelector(".submit-button").onclick = function() {
  if (inputBox.value != "" && inputBox.value != 0) {
    priceBox.innerText = randomPrice();
  }
  else {
    alert("please fill the fields")
  }
  // priceBox.innerText = "$519000";
};

