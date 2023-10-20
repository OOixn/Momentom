const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);

// setInterval(펑션, 5000) 5초 마다 펑션을 반복
// setTime(펑션, 5000) 5초 기다렸다가 한번만 실행
// padstart(2, "0") 문자열의 길이가 2가 되지 않으면 스트링 앞쪽에 0을 추가함. 숫자에는 적용 안되니 주의.
