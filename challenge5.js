function str(input){
  let binary="";
  for(let n=0;n<input.length;n++) {
      if(Number(input[n])<5) {
          binary=binary.concat("0");
      } else if(Number(input[n])>4) {
          binary=binary.concat("1");
      }
  }
  return binary;
}
console.log(str("13455"));