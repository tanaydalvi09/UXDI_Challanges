function LifePathNumber(birthDate) {
    return [...birthDate.split('-')].map(v=>v.split('').reduce((m,n)=>m+n*1,0))
   .map(v=>v.toString().split('').reduce((m,n)=>m+n*1,0)).reduce((m,n)=>m+n*1,0).toString().split('')
   .reduce((m,n)=>m+n*1,0).toString().split('').reduce((m,n)=>m+n*1,0)
  }

  console.log(LifePathNumber("1879-03-14"));