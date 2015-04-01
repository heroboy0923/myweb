var Assert = (function() {
    var _FAIL_TEXT_ = '......fail';
    var _PASS_TEXT_ = '......pass';

    function assertException(title, callback) {
        try {
            callback();
            return title + _FAIL_TEXT_;
        } catch(e) {
            return title + _PASS_TEXT_;
        }
    }

    function assertEqual(title, result, expect) {
        assertTrue(title, result === expect);
    }

    function assertTrue(title, result) {
        if(result === true) {
            return title + _PASS_TEXT_;
        } else {
            return title + _FAIL_TEXT_;
        }
    }

    return {
        assertTrue : assertTrue,
        assertEqual : assertEqual,
        assertException : assertException
    };
}());

var TestCase = (function(assert) {

    function addCase(callback) {
        callback(assert);
    }

    return {
        addCase : addCase
    };

}(Assert));

var TestGroup = (function(testCase) {

    function addGroup(groupName, callback) {
        // var $groupName = document.getElementById('group-name');
        // $groupName.innerHTML = groupName;
        callback(testCase.addCase);
    }

    return {
        addGroup : addGroup
    };
}(TestCase));

var JSUnit = (function(testGroup){

    function addProject(projectName, callback) {
        // var $projectName = document.getElementById('project-name');
        // $projectName.innerHTML = projectName;
        callback(testGroup.addGroup);
    }

    return {
        addProject : addProject
    };
}(TestGroup));
