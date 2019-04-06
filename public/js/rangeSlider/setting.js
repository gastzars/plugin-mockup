(function ($) {
	"use strict";
var $range = $("#range");

$range.ionRangeSlider({
    type: "double",
    min: 0,
    max: 5000,
    from: 500,
    to: 1900,
    onFinish: function (num) {
         $('.product-wrapper').hide().filter(function() {
            var price = parseInt($(this).data("price"), 10);
            return price >= num.from && price <= num.to;
        }).show();
    }
});
}(jQuery));
