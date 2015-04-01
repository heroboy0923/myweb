aliJsUnit.project("我的测试项目",function(describe){
    describe("测试除法",function(addCase,assert){
        addCase("4除以2应该等于2",assert.expect(function(){return Caculator.divide(4,2);}).equals(2));
        addCase("除0应该抛出异常",assert.expectException(function(){Caculator.divide(4,0);}));
    });
    describe("测试乘法",function(addCase,assert){
        addCase("4乘2应该等于8",assert.expect(function(){return Caculator.multiply(4,2);}).equals(8));
        //liskov替换原则，只要满足我要求的乘法才是我定义的乘法
        addCase("我的乘法需要取整，4*1.2结果等于5",assert.expect(function(){return Caculator.multiply(4,1.2);}).equals(5));
        addCase("我的乘法需要取整，4*1.1结果等于4",assert.expect(function(){return Caculator.multiply(4,1.1);}).equals(4));
    });
});
