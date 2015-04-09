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

    each: function(obj, callback) {
      var result = [];
      if(Array.isArray(obj)) {
        for(var i = 0; i<obj.length; i++) {
          result.push(callback(obj[i]));
        }
      }
      return result;
    }
  })
})();