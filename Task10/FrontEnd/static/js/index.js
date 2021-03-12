var search = function () {
    var employeeNames = document.querySelectorAll('.employee-name');
    var editableNames = document.querySelectorAll('.editable-name');
    for (var i = 0; i < employeeNames.length; i++) {
        var employeeName = employeeNames[i].value;
        var str = document.getElementById('search').value;
        editableNames[i].innerHTML = employeeName.replace(str, "<span style=\"background-color: gold ; color: black;\">" + str + "</span>");
    }
};
var checkAll = function () {
    var inputs = document.querySelectorAll('.employee-check');
    var condition = document.getElementById('check-all').checked;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = condition;
    }
};
document.querySelectorAll('.employee-check').forEach(function (element) {
    element.addEventListener('click', function () {
        if (!element.checked)
            document.getElementById('check-all').checked = false;
    });
});
var calculate = function () {
    var inputs = document.querySelectorAll('.employee-check');
    var sum = 0, max = -1, count = 0;
    for (var i = 0; i < inputs.length; i++) {
        if (max < inputs[i].value)
            max = inputs[i].value;
        if (1) {
            sum += Number(inputs[i].value);
            count += 1;
        }
    }
    var avg = sum / count;
    document.getElementById('average').innerHTML = avg.toString();
    document.getElementById('maximum').innerHTML = max.toString();
};
