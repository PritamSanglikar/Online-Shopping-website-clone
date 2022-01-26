function increment() {
  let h1 = document.querySelector("#id1");
  let prevValueStr = h1.innerHTML;

  let newValue = 0;
  let prevValue = parseInt(prevValueStr);
  if (prevValue == NaN) {
    // do nothing
  } else {
    newValue = prevValue + 1;
  }

  h1.innerHTML = newValue;
}

function decrement() {
  let h1 = document.querySelector("#id1");
  let prevValueStr = h1.innerHTML;

  let newValue = 0;
  let prevValue = parseInt(prevValueStr);
  if (prevValue == NaN) {
    // do nothing
  } else {
    newValue = prevValue - 1;
  }

  h1.innerHTML = newValue;
}
