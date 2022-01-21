const API_KEY = `08496ba993f55bf8bd5aecd0056b3c0a`;
const FindTemparature = () => {
  const city = document.getElementById("city-name");
  const cityValue = city.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${API_KEY}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
};
const setInnerText = (value, id) => {
  const fieldName = document.getElementById(id);
  fieldName.innerHTML = value;
};

const display = (x) => {
  setInnerText(x.name, "city-result");
  setInnerText(x.main.temp, "temp");
  setInnerText(x.weather[0].main, "clouds");

  //set icon
  const iconUrl = `http://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`;
  const iconId = document.getElementById("icon");
  iconId.setAttribute("src", iconUrl);
  console.log(x);
};
