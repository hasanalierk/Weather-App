const url = `https://api.openweathermap.org/data/2.5/`;
const key = `af8bbbdd3a0ebe279b6c4bf8e220985a`;
const body = document.getElementById("body");

window.addEventListener("load", () => {
  body.style.backgroundImage = `url(https://images.theconversation.com/files/232705/original/file-20180820-30593-1nxanpj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop)`;
});

const havadurumu = (e) => {
  if (e.keyCode == 13) {
    sonuçgetir(input.value);
    input.value = ``;
  }
};
//Yukarıda url mizi ve apikeyimizi değişkene aktarmıstık.Burda ise apimizin linkini değişkene aktardık ve fetch ile çağırdık. Sonra ilk then de json ile bilgilerimizi açtık sonraki then de ise bu bilgileri napacagımızı fonksıyon olarak verdık ıcıne ve fonksıyonu asagıda tanımladık.
const sonuçgetir = (şehirismi) => {
  let havaDurumuBilgisi = `${url}weather?q=${şehirismi}&appid=${key}&units=metric&lang=tr`;
  fetch(havaDurumuBilgisi)
    .then((hava) => {
      return hava.json();
    })
    .then(jsonsonuç);
};

const jsonsonuç = (sonuç) => {
  console.log(sonuç);
  let city = document.querySelector(".city");
  city.innerText = `${sonuç.name}, ${sonuç.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(sonuç.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = `${sonuç.weather[0].description}`;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(sonuç.main.temp_min)}°C / ${Math.round(
    sonuç.main.temp_max
  )}°C`;

  let wind = document.querySelector(".wind");
  wind.innerText = `${sonuç.wind.speed} / ${sonuç.wind.deg}`;
};

const input = document.getElementById("searchBar");
searchBar.addEventListener("keypress", havadurumu);
