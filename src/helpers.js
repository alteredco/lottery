function choice(arr) {
  let sideNum = Math.floor(Math.random()*arr.length);
  return arr[sideNum];
}

export {choice};