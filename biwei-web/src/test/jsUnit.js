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
            if(result === true) {
                addPassCount();
                var result = title + '......pass';
                console.log(result);
                li.innerText = result;
                ul.appendChild(li);
            } else {
                addFailCount();
                var result = title + '......fail';
                console.log(result);
                li.innerText = result;
                ul.appendChild(li);
            }
        }

        return {
            addCase : addCase
        };

    }());

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

    function addProject(projectName, callback) {
        document.getElementById('project').innerHTML = projectName;
        callback(TestGroup.addGroup);
    }

    return {
        addProject : addProject
    };
}(Assert));
