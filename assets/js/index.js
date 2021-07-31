// Реализовать функцию конструктор MyArray.

// Реализовать следующие методы функции конструктора:
// MyArray.isMyArray(arg); // подсказка: instanceof

// Реализовать прототип для создаваемых коллекций, со следующими методами:
// MyArray.prototype.push();
// MyArray.prototype.pop(); // подсказка: delete
// MyArray.prototype.unshift();
// MyArray.prototype.shift();
// MyArray.prototype.concat();


function MyArrayProto() {

  this.push = function () {
    for(let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }

    return this.length;
  }
  
  this.pop = function () {
    if(this.length === 0) {
      return undefined;
    }
    const deletedPop = this[this.length -1];
    delete this[this.length -1];
    this.length--;
  return deletedPop;
  }
  
  
  this.shift = function () {
    if(this.length === 0) {
      return undefined;
    }
    for(let i = 0; i < this.length; i++) {
      this[i - 1] = this[i]
    }
    const deletedShift = this[-1];
    delete this[-1];
    delete this[this.length -1]
    this.length--;
    return deletedShift;
  }
  
  this.unshift = function () {
    
  }
  
  this.concat = function () {
    
  }

  
}

function MyArray () {
  this.length = 0;

  for(let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}

const myArrProto = new MyArrayProto();

MyArray.prototype = myArrProto;

const myArr = new MyArray(1,2,3,'test');
// const myArr2 = new MyArray();