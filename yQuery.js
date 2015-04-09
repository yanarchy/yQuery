(function() {
	$ = function(selector) {
		if(!(this instanceof $)) {
			return new $(selector);
		}
		var elements;
		if(typeof selector === 'string') {
			elements = document.querySelectorAll(selector);
		} else if ($.isArray(selector)) {
			elements = selector;
		}
		[].push.apply(this, elements);
	};

	$.extend = function(target, obj) {
		for(var item in obj) {
			target[item] = obj[item];
		}
		return target;
	};
})();