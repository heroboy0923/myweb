/**
 * 用于单元测试的Assert模块
 * @type {{expect, expectException}}
 */
var Assert = (function() {

    function expect(callback) {
        return {
            equals : function(result) {
                return callback() === result;
            }
        }
    }

    function expectException(callback) {
        try {
            callback();
            return false;
        } catch(e) {
            return true;
        }
    }

    return {
        expect : expect,
        expectException : expectException
    };
}());

var JSUnit = (function(assert){

    /**
     * 用于增加测试用例
     * @type {{addCase}}
     */
    var TestCase = (function() {

        function addCount(elementId) {
            var $count = document.getElementById(elementId);
            var count = parseInt($count.innerText) + 1;
            $count.innerText = count;
        }

        function addTotalCount() {
            addCount('case-count');
        }

        function addFailCount() {
            addCount('fail-count');
        }

        function addPassCount() {
            addCount('pass-count');
        }

        function addCase(title, result) {
            var li = document.createElement("li");
            var ul = document.getElementById('test-result').lastElementChild.lastElementChild;
            addTotalCount();
            var testResult;
            if(result === true) {
                addPassCount();
                testResult = title + '......pass';

            } else {
                addFailCount();
                li.style.color = 'red';
                testResult = title + '......fail';
            }
            console.log(testResult);
            li.innerText = testResult;
            ul.appendChild(li);
        }

        return {
            addCase : addCase
        };

    }());

    /**
     * 用于增加测试组
     * @type {{addGroup}}
     */
    var TestGroup = (function(testCase) {

        function addGroup(groupName, callback) {
            var $div = document.getElementById('test-result');
            var html = $div.innerHTML;
            $div.innerHTML = html + '<div><div>' + groupName + '</div><ul></ul></div>';
            callback(testCase.addCase, assert);
        }

        return {
            addGroup : addGroup
        };
    }(TestCase));

    /**
     * 生成测试项目的结果
     * @param projectName
     * @param callback
     */
    function addProject(projectName, callback) {
        window.onload = function(){
            document.getElementById('project').innerHTML = projectName;
            callback(TestGroup.addGroup);
        };
    }

    return {
        addProject : addProject
    };
}(Assert));
