function add(date, diff) {
  let theNewDate;
  let endChar = diff.slice(-1);
  let num = +(diff.slice(0, -1));
  
  if(endChar === 's') theNewDate = new Date(date.setSeconds(date.getSeconds() + num));
  if(endChar === 'm') theNewDate = new Date(date.setMinutes(date.getMinutes() + num));
  if(endChar === 'h') theNewDate = new Date(date.setHours(date.getHours() + num));
  if(endChar === 'd') theNewDate = new Date(date.setDate(date.getDate() + num));
  if(endChar === 'w') theNewDate = new Date(date.setDate(date.getDate() + (num * 7)));
  if(endChar === 'M') theNewDate = new Date(date.setMonth(date.getMonth() + num));
  if(endChar === 'y') theNewDate = new Date(date.setFullYear(date.getFullYear() + num));
  
  return theNewDate;
}


module.exports = add;