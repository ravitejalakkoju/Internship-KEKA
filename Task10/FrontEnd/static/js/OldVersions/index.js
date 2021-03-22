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
        if (inputs[i].checked) {
            sum += Number(inputs[i].value);
            count += 1;
        }
    }
    var avg = sum / count;
    document.getElementById('average').innerHTML = avg.toString();
    document.getElementById('maximum').innerHTML = max.toString();
};


// jquery


$('#search').on('input change',() => {
    let str: string = document.getElementById('search').nodeValue.toString();
    for(let i = 0; i < 8; i++){
        if(names[i].indexOf(str) >= 0){
            let tempStr = names[i].replace(str, `<span style="background-color: gold; color: black;">${str}</span>`)
            document.getElementById(`#${eids[i]}-editable-name`).innerHTML = (tempStr);
        }
    }
});
$('#check-all').change((event) => {
    let checked: any = $('#check-all').prop('checked');
    for(let i = 0; i < 8; i++){
        $(`#${eids[i]}`).prop('checked', checked);
    }
});
$('.employee-check').on('change', (element) =>{
    $('#check-all').prop('checked', check(eids));    
});
$('#calculate').click(() => {
    let sum = 0, count = 0, max = -1, length = 8;
    for(let i = 0; i < length; i++){
        if(max < scores[i]) max = scores[i];
        sum += scores[i];
        count += 1;
    }
    let avg = sum/count;
    $('#average').html(avg.toString());
    $('#maximum').html(max.toString());
});