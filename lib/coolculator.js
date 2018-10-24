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
  raise(a, b){
    return a ** b
  }
  isNegative(x){
    if (x < 0){
      return true
    } else{
      return false
    }
  }
  isPositive(x){
    if (x >= 0){
      return true
    } else{
      return false
    }
  }
  isCool(x){
    var convert = x.toString();
    if (convert[0]==convert[convert.length-1]){
      return true
    } else{
      return false
    }
  }
  sumArray(x){
    var sum = 0
    for (var i = 0; i < x.length; i++) {
      sum = sum + x[i]
    } return sum
    //total = x.reduce(function(accumulator, currentValue, currentIndex, array) {
    //  return accumulator + currentValue;
    //})
    //return total
  }
}


module.exports = Coolculator
