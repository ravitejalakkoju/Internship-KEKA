let search =  (): void => {
    let employeeNames: any = document.querySelectorAll('.employee-name');
    let editableNames: any = document.querySelectorAll('.editable-name');
    for(let i = 0; i < employeeNames.length; i++){
        let employeeName = employeeNames[i].value;
        let str = (document.getElementById('search') as any).value;
        editableNames[i].innerHTML = employeeName.replace(str, `<span style="background-color: gold ; color: black;">${str}</span>`);
    }
};

let checkAll = (): void => {
    let inputs: any = document.querySelectorAll('.employee-check'); 
    let condition: boolean = (document.getElementById('check-all') as any).checked;
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].checked = condition; 
    } 
};

document.querySelectorAll('.employee-check').forEach(element => {
    element.addEventListener('click', () => {
        if(!(element as any).checked) (document.getElementById('check-all') as any).checked = false;
    });
});


let calculate = () => {
    let inputs: any = document.querySelectorAll('.employee-check');
    let sum: number = 0, max: number = -1, count:number = 0;
    for (var i = 0; i < inputs.length; i++) { 
        if(max < inputs[i].value) max = inputs[i].value
        if(inputs[i].checked){
            sum += Number(inputs[i].value);
            count += 1;
        }
    } 
    let avg = sum/count;
    document.getElementById('average').innerHTML = avg.toString();
    document.getElementById('maximum').innerHTML = max.toString();
};