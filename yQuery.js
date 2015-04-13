(function() {
  $ = function(selector) {
    if(!(this instanceof $)) {
      return new $(selector);
    }
    var elements;
    if(typeof selector === 'string') {
      // this returns an array like thing
      elements = document.querySelectorAll(selector);
    } else if ($.isArray(selector)) {
      elements = selector;
    }

    // need to turn our array like things into an array
    [].push.apply(this, elements);
  };

  var isArrayLike = function(obj) {
    if(typeof obj.length === 'number') {
      if(obj.length === 0){
        return true;
      } else if(obj.length > 1) {
        return (obj.length-1) in obj;
      }
    } else {
      return false;
    }
  };

  $.extend = function(target, obj) {
    for(var item in obj) {
      target[item] = obj[item];
    }
    return target;
  };

  $.extend($, {
    isArray: function(obj) {
      return Array.isArray(obj);
    },

    //https://api.jquery.com/jquery.each/
    each: function(obj, callback) {
      var result = [];
      if(isArrayLike(obj)) {
        for(var i = 0; i<obj.length; i++) {
          if(callback.call(this, i, obj[i]) === false)
            break;
        }
      } else {
        for(var item in obj) {
          if(obj.hasOwnProperty(item) === false)
            break;
        }
      }
      console.log(result);
      return obj;
    }
  });

}())

