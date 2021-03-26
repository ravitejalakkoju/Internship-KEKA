class Employee{
    private name: string;
    private score: number;
    private id: string;
    constructor(id: string, name: string, score: number){
        this.id = id;
        this.name = name;
        this.score = score;
        this.updateGrid();
    }
    getName(): string{
        return this.name;
    }
    getScore(): number{
        return this.score;
    }
    getid(): string{
        return this.id;
    }
    updateGrid(){
        let html = `
            <tr>
                <th scope="row"><input type="checkbox" id="${this.id}" name="employee" class="employee-check" value=${this.score}></th>
                <td><input class="employee-name d-none" value="${this.name}" disabled><span id="${this.id}-editable-name">${this.name}</span></td>
                <td>${this.score}</td>
                <td>${this.name.toLowerCase().split(' ')[0]}@technovert.com</td>
            </tr>
        `;
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    }
}

let allEmployeesChecked = (employees: Employee[]) => {
    for(let i = 0; i < employees.length; i++){
        if((<HTMLInputElement> document.getElementById(`${employees[i].getid()}`)).checked === false) return false;
    }
    return true;
};

let createEmployees = () => {
    let employees: Array<Employee> = [];
    employees.push(new Employee('e1','Vijay Kumar', 32));
    employees.push(new Employee('e2','Sashi Padagala', 40));
    employees.push(new Employee('e3','Ravi Teja Lakkoju', 45));
    employees.push(new Employee('e4','Bharat Chillimunta', 47));
    employees.push(new Employee('e5','Nikhil Vemi', 38));
    employees.push(new Employee('e6','Pavan Kasukurthi', 42));
    employees.push(new Employee('e7','Pranay Suryapet', 20));
    employees.push(new Employee('e8','Varun Chittimella', 46));
    employees.push(new Employee('e9','Raghavendra', 30));
    employees.push(new Employee('e10','Mano Sri Ram', 49));
    return employees;
}


window.onload = () => {
    let employees: Array<Employee> = createEmployees();

    let searchSelector = document.getElementById('search');
    let checkAllSelector = document.getElementById('check-all');
    let calculateSelector = document.getElementById('calculate');
    let eachEmployeeSelector = document.querySelectorAll('.employee-check');

    let highlightName = () => {
        let searchValue: string = (<HTMLInputElement> searchSelector).value.toString();
        for(let i = 0; i < employees.length; i++){
            if(employees[i].getName().indexOf(searchValue) >= 0){
                let highlightedText = employees[i].getName().replace(searchValue, `<span style="background-color: gold; color: black;">${searchValue}</span>`)
                document.getElementById(`${employees[i].getid()}-editable-name`).innerHTML = (highlightedText);
            }
        }
    }

    let checkAllEmployees = () => {
        let checked: any = (<HTMLInputElement> checkAllSelector).checked;
        for(let i = 0; i < employees.length; i++){
            (<HTMLInputElement> document.getElementById(`${employees[i].getid()}`)).checked = checked;
        }
    }

    let calculateSumAndMax = () => {
        const max = Math.max.apply(Math, employees.map(function(o) { return o.getScore(); }))
        const sum = employees.reduce((sum: number, score: Employee) => { return sum + score.getScore()}, 0)

        let avg = sum/employees.length;
        
        document.getElementById('average').innerHTML = (avg.toString()); 
        document.getElementById('maximum').innerHTML = (max.toString());
    }

    ['input','change'].forEach((event) => { 
        searchSelector.addEventListener(event,() => {
            highlightName();
    }) });

    checkAllSelector.addEventListener('click',(event) => {
        checkAllEmployees();
    });

    eachEmployeeSelector.forEach(element => { element.addEventListener('change', () =>{
        (<HTMLInputElement> checkAllSelector).checked = allEmployeesChecked(employees);    
    }) });

    calculateSelector.addEventListener('click', () => {
        calculateSumAndMax();
    });
};


