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
                <td class="d-none d-md-block border-0"></td>
            </tr>
        `;
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    }
}

let check = (eids: string[]) => {
    for(let i = 0; i < 8; i++){
        if((<HTMLInputElement> document.getElementById(`${eids[i]}`)).checked === false) return false;
    }
    return true;
};


window.onload = () => {
    let employees: Array<Employee> = [];
    let names: string[] = ['Vijay Kumar', 'Sashi Kumar', 'Ravi Teja Lakkoju', 'Bharat Chillimunta', 'Nikhil Vemi', 'Pavan Kasukurthi', 'Pranay Suryapet', 'Varun Chittimella'];
    let scores: number[] = [34, 21, 38, 40, 27, 32, 15, 10];
    let eids: string[] = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'];
    for(let i = 0; i < 8; i++){
        employees.push(new Employee(eids[i], names[i], scores[i]));
    } 
    ['input','change'].forEach((e) => { document.getElementById('search').addEventListener(e,() => {
        let str: string = (<HTMLInputElement> document.getElementById('search')).value.toString();
        for(let i = 0; i < 8; i++){
            if(names[i].indexOf(str) >= 0){
                let tempStr = names[i].replace(str, `<span style="background-color: gold; color: black;">${str}</span>`)
                document.getElementById(`${eids[i]}-editable-name`).innerHTML = (tempStr);
            }
        }
    }) });
    document.getElementById('check-all').addEventListener('click',(event) => {
        let checked: any = (<HTMLInputElement> document.getElementById('check-all')).checked;
        for(let i = 0; i < 8; i++){
            (<HTMLInputElement> document.getElementById(`${eids[i]}`)).checked = checked;
        }
    });
    (document.querySelectorAll('.employee-check')).forEach(element => { element.addEventListener('change', (e) =>{
        (<HTMLInputElement> document.getElementById('check-all')).checked = check(eids);    
    }) });
    document.getElementById('calculate').addEventListener('click', () => {
        let sum = 0, count = 0, max = -1, length = 8;
        for(let i = 0; i < length; i++){
            if(max < scores[i]) max = scores[i];
            sum += scores[i];
            count += 1;
        }
        let avg = sum/count;
        document.getElementById('average').innerHTML = (avg.toString()); 
        document.getElementById('maximum').innerHTML = (max.toString());
    });
};


