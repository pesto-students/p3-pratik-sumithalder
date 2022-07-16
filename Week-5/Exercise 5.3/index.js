//referenc given below
//const hasDuplicate = arr => new Set(arr).size !== arr.length;


function hasDuplicate(array) {

    if (array.length !== new Set(array).size) {

      return true;
    }
  
    return false;
}
  
console.log(hasDuplicate([11,5,7,9,6,9])); // 👉️ true
  
console.log(hasDuplicate([20,4,8,10,11,12])); // 👉️ false