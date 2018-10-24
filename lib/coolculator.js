class Coolculator {
  add(a, b) {
    return a + b
  }
  multiply(a, b){
    return a * b 
  }
  subtract(a, b){
    return a - b
  }
  divide(a, b){
    return a / b
  }
  returnHighest(a, b){
    if (a > b){
      return a
    }else{
      return b
    }
  }
  returnLowest(a, b){
    if (a < b){
      return a
    }else{
      return b
    }
  }
  double(x){
    return x * 2
  }
  square(x){
    return x * x
  }
}

module.exports = Coolculator
