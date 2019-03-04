module.exports = function getZerosCount(number, base) {
  let maxSimpleNum = base;
  let arrTime = []; 
  let getMaxSimpleNum = (simpleNum) => {
    let simpleNumTime = simpleNum;
    let arr = [];
    for (let i = 2; i <= simpleNum ; i++){
      let balance = simpleNumTime % i;
      if (balance === 0){
        if (arr[i] === undefined) {
          arr[i] = 0;
        }
        arr[i]++;
        simpleNumTime /= i;
        i--;
      }
    }
    return arr;
  }
  arrTime = getMaxSimpleNum(maxSimpleNum);
  let arrNew = [];
  for (let i = 0; i < arrTime.length; i++) {
    if (arrTime[i] !== undefined) {
      arrNew.push([i, arrTime[i]])
    }
  }
  let divideBase = (n, maxSimpleNum) => {
    let answer = 0;
    let newN = n / maxSimpleNum;
    if (newN >= 1){
      newN = Math.floor(newN);
      answer += newN;
      answer += divideBase(newN, maxSimpleNum);
    }
    return answer;
  }
  for (let i = 0; i < arrNew.length; i++) {
    arrNew[i][2] = Math.floor(divideBase(number, arrNew[i][0]) / (arrNew[i][1]));
  }
  arrNew.sort((a, b) => a[2] - b[2]);
  return arrNew[0][2];
}