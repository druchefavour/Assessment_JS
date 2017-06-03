exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // loop through the entire array and return the number it is equivalent to the  position of the number in the aray

    for (var i =0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    } 
   return -1;
  },

  sum: function(arr) {
    // Declare a variable that will add all the items in an array
    var sum = 0;

    for (var 1 = 0, i < arr.length, i ++) {
      sum += arr[i];
    }

    return sum;

  },

  //================================================

  // Removing an item from an array

  remove: function(arr, item) {

    var itemToRemove

    // loop over the array and use the splice method to select the item to remove
    (for var i = 0; i < arr.length, i++) {
      if (arr[i] === item) {
        itemToRemove = arr.splice(i, 1);
      }
    }
    return arr;
  };

  // ==============================================

  // Remove an item from an array and return the original array

  //removeWithoutCopy: function (arr, item)
  function removeWithoutCopy (arr, item) {
    // declare a constructor - say newArr

    var newArr = new Array();
     for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        newArr.push(arr[i]);
      }
     }
     return newArr;
  };

  // ===========================================================

  // Append an item to the end of an array

  append: function(arr, item) {

    // Use the push method to push an item to the end of the array
    arr.push(item);
    return arr;
  };

  // Truncate an array using the splice method

  truncate: function(arr) {

     arr.splice(arr.length-1, 1);
      return arr;
  },

  prepend: function(arr, item) {
    // Use the unshift method to add an item to the begining of the array

    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};