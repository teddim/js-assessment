exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(sum,curr) {return sum + curr}, 0);
  },

  remove : function(arr, item) {
    return arr.filter(function(element) {
      return element !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length; i >= 0; i--) {
      if (arr[i] === item) {
        var index = arr.indexOf(item);
        arr.splice(index,1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var arr3 = [];
    arr3 = arr1.concat(arr2);
    return arr3;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(element) { return element === item;
    }).length;
  },

  duplicates : function(arr) {
    var that = this;
    var result = [];
    arr.forEach(function(element) {
      if (that.count(arr,element) > 1 && result.indexOf(element) === -1) {
        result.push(element);
      }
    });
    return result;
  },

  square : function(arr) {
    return arr.map(function(element) {return element * element;});
  },

  findAllOccurrences : function(arr, target) {
    var array = [];
    arr.forEach(function(element,index) {
      if (element === target) {
        array.push(index);
      }
    });
    return array;
  }
};
