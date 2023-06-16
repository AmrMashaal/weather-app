// بسم الله الرحمن الرحيم
let input = document.querySelector("input");
let ce = document.querySelector(".c h1");
let fr = document.querySelector(".f h1");
let fOrC = document.querySelectorAll(".fOrC div");
let realDegree = document.querySelectorAll(".realDegree div");
let inputHolderSpan = document.querySelector(".inputHolder span");
let cityName = document.querySelector(".cityName");

async function weatherApi() {
  let value = input.value;
  try {
    let api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=f600103b3c00fff59c52abfa43c06a7f`
    );
    api = await api.json();
    let c = (api.main.temp - 273.15).toFixed(1);
    let f = (c * 1.8 + 32).toFixed(1);
    ce.innerHTML = c;
    fr.innerHTML = f;
    cityName.innerHTML = value;
    inputHolderSpan.style.display = "none";
  } catch (error) {
    inputHolderSpan.style.display = "block";
    ce.innerHTML = "00.0";
    fr.innerHTML = "00.0";
    cityName.innerHTML = "";
  }
}

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && input.value.length !== 0) {
    weatherApi();
  }
});

fOrC.forEach(function (e) {
  let array = Array.from(fOrC);
  e.onclick = function () {
    realDegree.forEach(function (ele) {
      realDegree.forEach(function (ele2) {
        ele2.classList.remove("active");
      });
      realDegree[array.indexOf(e)].classList.add("active");
    });
  };
});
