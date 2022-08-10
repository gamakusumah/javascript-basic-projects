const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const times = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// const futureDate = new Date(2022, 7, 12, 17, 30);
const futureDate = new Date(tempYear, tempMonth, tempDay + 7, 12, 30);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hours= futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = weekdays[futureDate.getDay()];
const futureTime = futureDate.getTime();

giveaway.textContent = `giveaway ends on sunday ${day}, ${date} ${month} ${year} ${hours}:${minutes} WIB`

function getRemaindingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  // 1s =1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  // value in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  times.forEach(function(time, index) {
    time.innerHTML = format(values[index]);
  })

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry this giveaway has expired</h4>`;
  }

  // console.log(days, hours, minutes, seconds);
}

// countdown
let countdown = setInterval(getRemaindingTime, 1000);

getRemaindingTime();
