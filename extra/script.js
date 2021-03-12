document.getElementById('search').addEventListener('input', () => {
    let employeeNames = document.querySelectorAll('.employee-name');
    let editableNames = document.querySelectorAll('.editable-name');
    for(let i = 0; i < employeeNames.length; i++){
        let employeeName = employeeNames[i].value;
        let str = document.getElementById('search').value;
        editableNames[i].innerHTML = employeeName.replace(str, `<span style="background-color: gold ; color: black;">${str}</span>`);
    }
});
let checkAll1 = () => {
    let inputs = document.querySelectorAll('.employee-check'); 
    let condition = document.getElementById('check-all').checked;
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = condition; 
    } 
}
document.querySelectorAll('.employee-check').forEach(element => {
    element.addEventListener('click', () => {
        if(!element.checked) document.getElementById('check-all').checked = false;
    });
})
let calculate1 = () => {
    let inputs = document.querySelectorAll('.employee-check');
    let sum = 0, max = -1, count = 0;
    for (var i = 0; i < inputs.length; i++) { 
        if(max < inputs[i].value) max = inputs[i].value
        if(inputs[i].checked){
            sum += Number(inputs[i].value);
            count += 1;
        }
    } 
    let avg = sum/count;
    document.getElementById('average').innerHTML = avg;
    document.getElementById('maximum').innerHTML = max;
};