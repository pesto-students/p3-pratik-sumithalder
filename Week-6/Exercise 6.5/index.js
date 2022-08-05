var pairDiff = function(arr, diff) {
    let mymap = new Set(arr);
  
    for (let i = 0; i < arr.length; i++) {
      const value = arr[i] + diff;
      if (mymap.has(value)) return 1;
    }
  
    return 0;
}

var arr = [5, 10, 3, 2, 50, 80];

var diff = 78;
  
console.log(pairDiff(arr, diff)); // 1