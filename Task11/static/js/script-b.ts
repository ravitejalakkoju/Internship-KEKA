$(document).ready(() => {
    let validateEmail = (email: any) => {
        const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegExp.test(email);
    }
    let validateWebpage = (website: any) => {
        const websiteRegExp = /^(ftp|http|https):\/\/(www).[\w\-~]+\.[a-z]+$/;
        return websiteRegExp.test(website);
    }
    let validateMobileNum = (mobile: string) => {
        const mobileRegExp = /^\d{10}$/;
        return mobileRegExp.test(mobile);
    }
    let formValidation = () => {
        $('#name').on('input change',() => {
            $('#nameRequired').hide()
        });
        $('#email').on('input change',() => {
            $('#emailRequired').hide()
        });
        $('#email').on('input change',() => {
            let email = $('#email').val();
            validateEmail(email) ? $('#emailHelp').hide() : $('#emailHelp').show();
        });
        $('#mobileNum').on('input change',() => {
            $('#mobileRequired').hide()
            let mobileNum = $('#mobileNum').val();
            validateMobileNum(mobileNum.toString()) ? $('#mobileHelp').hide() : $('#mobileHelp').show();
        });
        $('#landline').on('input change',() => {
            $('#landlineRequired').hide()
        });
        $('#website').on('input change',() => {
            $('#websiteRequired').hide()
            let website = $('#website').val();
            validateWebpage(website) ? $('#websiteHelp').hide() : $('#websiteHelp').show();
        });
        $('#address').on('input change',() => {
            $('#addressRequired').hide()
        });
    };
    formValidation();
    $('#employee-form-div').hide();
    let addEmployeeFunc = () => {
        $('#employee-form-div').fadeIn();
        $('#employee-form').trigger('reset');
        $('#address').html('');
        $('#submit-button').html(`<button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="submitEmployee">Add</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    };
    $('#addEmployee').click(() => {
        addEmployeeFunc();
    });
    $(document).keydown(function(e) {
        if(e.key == "a" && e.altKey) {
            addEmployeeFunc();
        }
    });
    $('#close-form').click(() => {
        $('.invalid-feedback').hide()
        $('#employee-form-div').fadeOut();
        $('#employee-form').trigger('reset');
    });
    $(document).keydown((e) => {
        if(e.keyCode === 27){
            $('.invalid-feedback').hide()
            $('#employee-form-div').fadeOut();
        }
    });
    let employeeList = new Employees();
    $(document).delegate('#submitEmployee', 'click', (e) => {
    let employee = $('#employee-form').serializeArray();
    let returnValue: Boolean = true;
        for(let i = 0; i < employee.length; i++){
            if(employee[i].value.length < 1 && i != 3 && i !== 4){
                $(`#${employee[i].name + 'Required'}`).show();
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        employeeList.add(new Employee('e'+employeeList.length(), employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value));
        e.preventDefault();
        $('#employee-form-div').hide();
        $('#employee-form').trigger('reset');
    });
    $(document).delegate('.edit-employee', 'click', (e) =>{
        let eid = e.target.value;
        $('#employee-form-div').toggle();
        let el: Employee = employeeList.getEmployee(eid);
        $('input[name="name"]').val(el.getName());
        $('input[name="email"]').val(el.getEmail());
        $('input[name="mobile"]').val(el.getMobile());
        $('input[name="landline"]').val(el.getLandline());
        $('input[name="website"]').val(el.getWebsite());
        $('#address').html(el.getAddress());
        $('#submitEmployee').hide();
        $('#submit-button').html(`<button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" value="${eid}" id="editEmployee">Edit</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    });
    $(document).delegate('#editEmployee', 'click', (e) => {
        let employee = $('#employee-form').serializeArray();
        let returnValue: Boolean = true;
        for(let i = 0; i < employee.length - 3; i++){
            if(employee[i].value.length < 1 && i != 3 && i !== 4){
                $(`#${employee[i].name + 'Required'}`).show();
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        employeeList.update(e.target.value, employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value);
        e.preventDefault();
        $('#employee-form').trigger('reset');
        $('#address').html('');
        $('#employee-form-div').hide();
    });
    $(document).delegate('.delete-employee', 'click', (e) => {
        if(confirm('Are you sure you want to delete the contact ?')) employeeList.delete(e.target.value);
    });
});

class Employees{
    private employees: Array<Employee> = [];
    constructor(){
        this.add(new Employee('e'+this.employees.length,'Chandermani Arora', 'chandermani@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Praveen Battula', 'praveen@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
    }
    public add(employee: Employee){
        this.employees.push(employee);
    }
    public getEmployee(eid: string): Employee{
        let foundEmp:Employee = null;
        this.employees.forEach((el) => {
            if(el.getEid() === eid){
                foundEmp = el;
            }
        });
        return foundEmp;
    };
    public update(eid: string, name:string, email:string, mobile:string, landline:string, website: string, address:string){
        this.employees.forEach((el) => {
            if(el.getEid() === eid){
                el.updateDetails(name, email, mobile, landline, website, address);
                el.updatePage();
            }
        })
    }
    public delete(eid: string){
        this.employees = this.employees.filter(el => el.getEid() !== eid);
        $(`#v-pills-${eid}-tab`).remove();
        $(`#v-pills-${eid}`).remove();
    }
    public length(){
        return this.employees.length;
    }
}

class Employee{
    private eid: string;
    private name:string;
    private email: string;
    private mobile: string;
    private landline: string;
    private website: string;
    private address: string;

    constructor(id:string, name:string, email:string, mobile:string, landline:string, website: string, address:string){
        this.eid = id;
        this.name = name;
        this.email= email;
        this.mobile= mobile;
        this.landline= landline;
        this.website= website;
        this.address= address;
        this.createInPage();
    }
    public getEid(){
        return this.eid;
    }
    public getName(){
        return this.name;
    }
    public getEmail(){
        return this.email;
    }
    public getMobile(){
        return this.mobile;
    }
    public getLandline(){
        return this.landline;
    }
    public getWebsite(){
        return this.website;
    }
    public getAddress(){
        return this.address;
    }
    public updateDetails(name:string, email:string, mobile:string, landline:string, website: string, address:string){
        this.name = name;
        this.email= email;
        this.mobile= mobile;
        this.landline= landline;
        this.website= website;
        this.address= address;
    }
    private createInPage(): void{
        this.createTab();
        this.createTabContent();

    }
    public updatePage(): void{
        this.updateTab();
        this.updateContent();

    }
    private createTab(): void{
        let html: string = `
                <button class="nav-link text-left rounded-0 p-2 pt-1 border border-secondary" id="v-pills-${this.eid}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${this.eid}" type="button" role="tab" aria-controls="v-pills-${this.eid}" aria-selected="true" onclick="document.getElementById('v-pills-tabContent').scrollIntoView();">
                    <div>
                        <span class="fs-5">${this.name}</span>
                        <div class="lh-1 m-1 small">
                            <span class="small">${this.email}</span></br>
                            <span class="small">+91 ${this.mobile}</span>
                        </div>
                    </div>
                </button>
        `;
        $('#v-pills-tab').append(html);
    }
    private createTabContent(): void{
        let html: string = `
                <div class="tab-pane fade show ms-lg-5 position-relative" id="v-pills-${this.eid}" role="tabpanel" aria-labelledby="v-pills-${this.eid}-tab">
                    <div class="options small position-absolute top-0 end-0">
                        <button class="edit border-0 bg-transparent text-secondary edit-employee" value='${this.eid}'><i class="fas fa-pen me-1"></i>EDIT</button>
                        <button class="delete ms-md-2 border-0 bg-transparent text-secondary delete-employee" value='${this.eid}'><i class="fas fa-trash-alt me-1"></i>DELETE</button>
                    </div>
                    <div id="v-pills-${this.eid}-details">
                        <span class="fs-4">
                            ${this.name}
                        </span>
                        <ul class="list-unstyled small text-dark">
                            <li class="mt-2 mb-2">Email: ${this.email}</li>
                            <li class="mt-2 mb-2">
                                Mobile: +91 ${this.mobile} </br>    
                                Landline: ${this.landline}
                            </li>
                            <li class="mt-2 mb-2">Website: ${this.website}</li>
                            <li class="mt-2 mb-2">
                            Address: <span class="roboto" style="font-size: 0.85rem; white-space: pre-wrap;">${this.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
        `;
        $('#v-pills-tabContent').append(html);
    }
    private updateTab(): void{
        let html: string = `
                    <div>
                        <span class="fs-5">${this.name}</span>
                        <div class="lh-1 m-1 small">
                            <span class="small">${this.email}</span></br>
                            <span class="small">+91 ${this.mobile}</span>
                        </div>
                    </div>
        `;
        $(`#v-pills-${this.eid}-tab`).html(html);
    }
    private updateContent(): void{
        let html: string = `
                    <span class="fs-4">
                        ${this.name}
                    </span>
                    <ul class="list-unstyled small text-dark">
                        <li class="mt-2 mb-2">Email: ${this.email}</li>
                        <li class="mt-2 mb-2">
                            Mobile: +91 ${this.mobile} </br>    
                            Landline: ${this.landline}
                        </li>
                        <li class="mt-2 mb-2">Website: ${this.website}</li>
                        <li class="mt-2 mb-2">
                            Address: ${this.address}
                        </li>
                    </ul>
        `;
        $(`#v-pills-${this.eid}-details`).html(html);
    }
}