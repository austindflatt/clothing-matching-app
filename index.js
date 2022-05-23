const currentDate = document.getElementById("date");
const topImg = document.getElementById("topImg");
const bottomImg = document.getElementById("bottomImg");
const shoesImg = document.getElementById("shoesImg");
const button = document.getElementById("button");

const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const nth = function (d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getCurrentDate = new Date();
const currentDateArr = getCurrentDate.toDateString().split(" ");
const getDayOfTheWeek = day[getCurrentDate.getDay()];


currentDateArr[0] = getDayOfTheWeek;
currentDateArr[2] = currentDateArr[2] + nth(currentDateArr[2]) + ",";
const currentDateString = currentDateArr.join(" ");
currentDate.innerHTML = `${currentDateString}`;

const getClothingType = function (day) {
  switch (day) {
    case 0:
      return "sport";
    case 6:
      return "casual";
    default:
      return "formal";
  }
};

const filteredTypeClothes = clothes.filter((event) => {
  if (event.dressCode.toLowerCase() === getClothingType(getCurrentDate.getDay())) {
    return event;
  }
});

const filterdTops = filteredTypeClothes.filter((event) => {
  if (event.type.toLowerCase() === "top") {
    return event;
  }
});

const filterdBottoms = filteredTypeClothes.filter((event) => {
  if (event.type.toLowerCase() === "bottom") {
    return event;
  }
});
console.log(filterdBottoms);

const filterdShoes = filteredTypeClothes.filter((event) => {
  if (event.type.toLowerCase() === "shoes") {
    return event;
  }
});

const random = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

topImg.src = filterdTops[random(filterdTops)].imageUrl;
bottomImg.src = filterdBottoms[random(filterdBottoms)].imageUrl;
shoesImg.src = filterdShoes[random(filterdShoes)].imageUrl;

button.onclick = function () {
  topImg.src = filterdTops[random(filterdTops)].imageUrl;
  bottomImg.src = filterdBottoms[random(filterdBottoms)].imageUrl;
  shoesImg.src = filterdShoes[random(filterdShoes)].imageUrl;
};