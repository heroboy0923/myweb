JSUnit.addProject('计算器测试', function(addGroup) {
    addGroup('乘法测试', function(addCase, assert){
        addCase('4乘1.1等于4', assert.expect(function() {
            return Calculator.multiply(4, 1.1);
        }).equals(4));

        addCase('4乘1.2等于5', assert.expect(function() {
            return Calculator.multiply(4, 1.2);
        }).equals(5));

        addCase('4乘2等于8', assert.expect(function() {
            return Calculator.multiply(4, 2);
        }).equals(8));
    });

    addGroup('除法测试', function(addCase, assert){
        addCase('4除以0异常', assert.expectException(function() {
            return Calculator.divide(4, 0);
        }));

        addCase('4除以2等于2', assert.expect(function() {
            return Calculator.divide(4, 2);
        }).equals(2));
    });

    addGroup('加法测试', function(addCase, assert){
        addCase('1加2等于3', assert.expect(function() {
            return Calculator.add(1, 2);
        }).equals(3));
    });

    addGroup('减法测试', function(addCase, assert){
        addCase('1减2等于-1', assert.expect(function() {
            return Calculator.subtract(1, 2);
        }).equals(-1));

        addCase('3减1等于1', assert.expect(function() {
            return Calculator.subtract(3, 1);
        }).equals(1));
    });
});
