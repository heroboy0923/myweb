var Calculator = (function() {

    function multiply(a, b) {
        return Math.round(a * b);
    }

    function divide(a, b) {
        if(b === 0) {
            throw new Error('0 cannot be divided');
        }
        return a / b;
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }
    return {
        add : add,
        divide : divide,
        multiply: multiply,
        subtract: subtract
    };
}());
