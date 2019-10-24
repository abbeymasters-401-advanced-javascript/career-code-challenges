class Set {
  constructor(array) {
    this.array = array;
  }

  add(value) {
    if(!this.array.includes(value)) this.array.push(value);
  }

  remove(value) {
    const index = this.array.indexOf(value);
    if(this.array.includes(value)) this.array.splice(index, 1);
  }

  has(value) {
    if(this.array.includes(value)) return true;
    else return false;
  }

}


module.exports = Set;