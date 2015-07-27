seajs.use(['datepicker'], function() {

    $('#date').datetimepicker({
        language: 'zh-CN',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        format: "yyyy-mm-dd",
        minView: 2,
        startView: 2,
        minuteStep: 1
    });
});
