exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2])
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(anotherStr) {
      return str + ', ' + anotherStr;
    }
  },

  makeClosures: function(arr, fn) {
    // Declare an empty array and a helper function
    var array = [];
    var hlper = function (j) {
      return function () {
        return fn(arr[j]);
      }
    };
    // loop across the arr

    for (var j = 0; j < arr.length; j++) {
      array[j] = helper [j];
      }
      return array; 


  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};