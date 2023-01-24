// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
    if (num > 1) {
      for (let factor = num - 1; factor > 0; factor--) {
        num*=factor;
        } 
        console.log(num)
        return num;
      } 
    return 1;
  }
  
  factorialize(5);