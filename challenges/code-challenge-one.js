function add(date, diff) {
  let endChar = diff.slice(-1);
  let num = +(diff.slice(0, -1));
  if(endChar === 'd') date.setDate(date.getDate() + num);
  if(endChar === 'w') date.setDate(date.getDate() + (num * 7));
  if(endChar === 'M') date.setMonth(date.getMonth() + num);
  if(endChar === 'y') date.setFullYear(date.getFullYear() + num);
  if(endChar === 's') date.getSeconds(date.getSeconds() + num);
  if(endChar === 'm') date.setMinutes(date.getMinutes() + num);
  if(endChar === 'h') date.setHours(date.getHours() + num);
  return date;
}

module.exports = add;