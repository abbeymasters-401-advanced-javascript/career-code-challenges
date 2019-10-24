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

  intersection(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      if(set.array.includes(set.array[i])) newSet.add(set.array[i]);
    }
    return newSet;
  }

  union(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      newSet.add(set.array[i]);
    }
    for(let j = 0; j < this.array.length; j++) {
      newSet.add(this.array[j]);
    }
    return newSet;
  }

  difference(set) {
    const newSet = new Set();
    for(let i = 0; i < set.array.length; i++) {
      newSet.add(set.array[i]);
    }
    for(let j = 0; j < this.array.length; j++) {
      if(newSet.has(this.array[j])) newSet.remove(this.array[j]);
      else if(!newSet.has(this.array[j])) newSet.add(this.array[j]);
    }
    return newSet;
  }

  

}


module.exports = Set;