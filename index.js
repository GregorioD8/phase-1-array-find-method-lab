const record = [
  {
    year: "2015",
    result: "W"
  },
  {
    year: "2014",
    result: "N/A"
  },
  {
    year: "2013",
    result: "L"
  },

]

//returns winning year if they have won any year
function superbowlWin(array) {
  
  let findWin = array.find(win => win.result === 'W')
  if(typeof findWin === 'object'){
  findWin = findWin.year
  }
  
 return findWin
}

