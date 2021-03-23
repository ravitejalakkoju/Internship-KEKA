class Employee{
    private name: string;
    private score: number;
    private eid: string;
    constructor(eid: string, name: string, score: number){
        this.eid = eid;
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
    getEid(): string{
        return this.eid;
    }
    updateGrid(){
        let html = `
            <tr>
                <th scope="row"><input type="checkbox" id="${this.eid}" name="employee" class="employee-check" value=${this.score}></th>
                <td><input class="employee-name d-none" value="${this.name}" disabled><span id="${this.eid}-editable-name">${this.name}</span></td>
                <td>${this.score}</td>
                <td>${this.name.toLowerCase().split(' ')[0]}@technovert.com</td>
            </tr>
        `;
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    }
}

let check = (employees: Employee[]) => {
    for(let i = 0; i < employees.length; i++){
        if((<HTMLInputElement> document.getElementById(`${employees[i].getEid()}`)).checked === false) return false;
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
    ['input','change'].forEach((e) => { document.getElementById('search').addEventListener(e,() => {
        let str: string = (<HTMLInputElement> document.getElementById('search')).value.toString();
        for(let i = 0; i < employees.length; i++){
            if(employees[i].getName().indexOf(str) >= 0){
                let tempStr = employees[i].getName().replace(str, `<span style="background-color: gold; color: black;">${str}</span>`)
                document.getElementById(`${employees[i].getEid()}-editable-name`).innerHTML = (tempStr);
            }
        }
    }) });
    document.getElementById('check-all').addEventListener('click',(event) => {
        let checked: any = (<HTMLInputElement> document.getElementById('check-all')).checked;
        for(let i = 0; i < employees.length; i++){
            (<HTMLInputElement> document.getElementById(`${employees[i].getEid()}`)).checked = checked;
        }
    });
    (document.querySelectorAll('.employee-check')).forEach(element => { element.addEventListener('change', (e) =>{
        (<HTMLInputElement> document.getElementById('check-all')).checked = check(employees);    
    }) });
    document.getElementById('calculate').addEventListener('click', () => {
        let sum = 0, count = 0, max = -1, length = employees.length;
        for(let i = 0; i < length; i++){
            if(max < employees[i].getScore()) max = employees[i].getScore();
            sum += employees[i].getScore();
            count += 1;
        }
        let avg = sum/count;
        document.getElementById('average').innerHTML = (avg.toString()); 
        document.getElementById('maximum').innerHTML = (max.toString());
    });
};


