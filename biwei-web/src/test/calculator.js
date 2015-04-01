var Calculator = (function() {
    return {
        add : function(a, b) {
            return a + b;
        },
        divide : function(a, b) {
            if(b === 0) {
                throw new Error('can not be 0');
            }
            return a / b;
        },
        multiply: function(a, b) {
            return Math.round(a * b);
        }
    };
}());
