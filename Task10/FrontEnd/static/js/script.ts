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
        $('#tableBody').append(html);
    }
}

let check = (eids: string[]) => {
    for(let i = 0; i < 8; i++){
        if($(`#${eids[i]}`).prop('checked') === false) return false;
    }
    return true;
};

$(document).ready(() => {
    let employees: Array<Employee> = [];
    let names: string[] = ['Vijay Kumar', 'Sashi Kumar', 'Ravi Teja Lakkoju', 'Bharat Chillimunta', 'Nikhil Vemi', 'Pavan Kasukurthi', 'Pranay Suryapet', 'Varun Chittimella'];
    let scores: number[] = [34, 21, 38, 40, 27, 32, 15, 10];
    let eids: string[] = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'];
    for(let i = 0; i < 8; i++){
        employees.push(new Employee(eids[i], names[i], scores[i]));
    } 
    $('#search').on('input change',() => {
        let str: string = $('#search').val().toString();
        for(let i = 0; i < 8; i++){
            if(names[i].indexOf(str) >= 0){
                let tempStr = names[i].replace(str, `<span style="background-color: gold; color: black;">${str}</span>`)
                $(`#${eids[i]}-editable-name`).html(tempStr);
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
});


