window.onload = () => {
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
        ['input', 'change'].forEach((e) => document.getElementById('name').addEventListener(e,() => {
            document.getElementById('nameRequired').style.display = 'none';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('email').addEventListener(e,() => {
            document.getElementById('emailRequired').style.display = 'none';
            document.getElementById('emailDuplicate').style.display = 'none';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('email').addEventListener(e,() => {
            let email = (<HTMLInputElement> document.getElementById('email')).value;
            validateEmail(email) ? document.getElementById('emailHelp').style.display = 'none' : document.getElementById('emailHelp').style.display = 'block';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('mobileNum').addEventListener(e,() => {
            document.getElementById('mobileRequired').style.display = 'none';
            document.getElementById('mobileDuplicate').style.display = 'none';
            let mobileNum = (<HTMLInputElement> document.getElementById('mobileNum')).value;
            validateMobileNum(mobileNum.toString()) ? document.getElementById('mobileHelp').style.display = 'none' : document.getElementById('mobileHelp').style.display = 'block';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('landline').addEventListener(e,() => {
            document.getElementById('landlineRequired').style.display = 'none';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('website').addEventListener(e,() => {
            document.getElementById('websiteRequired').style.display = 'none';
            let website = (document.getElementById('website') as HTMLInputElement).value;
            validateWebpage(website) ? document.getElementById('websiteHelp').style.display = 'none' : document.getElementById('websiteHelp').style.display = 'block';
        }) );
        ['input', 'change'].forEach((e) => document.getElementById('address').addEventListener(e,() => {
            document.getElementById('addressRequired').style.display = 'none';
        }) );
    };
    formValidation();
    document.getElementById('employee-form-div').style.display = 'none';
    let addEmployeeFunc = () => {
        document.getElementById('addEmployee').classList.add('active');
        document.getElementById('employee-form-div').style.display = 'block';
        (<HTMLFormElement> document.getElementById('employee-form')).reset();
        document.querySelectorAll('.invalid-feedback').forEach((e) => {
            (<HTMLElement> e).style.display = 'none'
        });
        document.getElementById('address').innerHTML = '';
        document.getElementById('submit-button').innerHTML = (`<button class="btn me-2 btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="closeForm">Close</button><button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="submitEmployee">Add</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    };
    document.getElementById('addEmployee').addEventListener('click', () => {
        addEmployeeFunc();
    });
    document.addEventListener('keydown', (function(e) {
        if(e.key == "a" && e.altKey) {
            addEmployeeFunc();
        }
    }) );
    let closeForm = () => {
        document.querySelectorAll('.invalid-feedback').forEach((e) => {
            (<HTMLElement> e).style.display = 'none'
        });
        document.getElementById('addEmployee').classList.remove('active');
        document.getElementById('employee-form-div').style.display = 'none';
        (<HTMLFormElement> document.getElementById('employee-form')).reset();
    }
    document.getElementById('close-form').addEventListener('click', () => {
        closeForm();
    });
    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27){
            closeForm();
        }
    });
    let employeeList = new Employees();
    document.getElementById('submit-button').addEventListener('click', (e) => {
        e.preventDefault();
        if((<Element> e.target).id === 'submitEmployee') submitEmployee(e);
        else if((<Element> e.target).id === 'saveEmployee') saveEmployee(e);
        else if((<Element> e.target).id === 'closeForm') closeForm();
        return false;
    });
    document.getElementById('v-pills-tabContent').addEventListener('click',(e) => {
        if((<Element> e.target).classList.contains('edit-employee')) editEmployee(e);
        else if((<Element> e.target).classList.contains('delete-employee')) deleteEmployee(e);
    });
    let serializeArray = (form) => {
        let formDetails: { name: string, value: string }[] = [];
        form.querySelectorAll('input').forEach(element => {
            formDetails.push({name: element.name, value: element.value});
        });
        formDetails.push({name: form.querySelector('textarea').name, value: form.querySelector('textarea').value});
        return formDetails;
    }
    let submitEmployee = (e) => {
    let employee = serializeArray(document.getElementById('employee-form'));
    let returnValue: Boolean = true;
        for(let i = 0; i < employee.length; i++){
            if(employee[i].value.length < 1 && i != 3 && i !== 4){
                document.getElementById(`${employee[i].name + 'Required'}`).style.display = 'block';
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        returnValue = employeeList.add(new Employee('e'+employeeList.length(), employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value));
        e.preventDefault();
        if(!returnValue) return false;
        document.getElementById('addEmployee').classList.remove('active');
        document.getElementById('employee-form-div').style.display = 'none';
        (<HTMLFormElement> document.getElementById('employee-form')).reset();
    };
    let editEmployee = (e) =>{
        let eid = e.target.value;
        document.getElementById('employee-form-div').style.display = 'block';
        let el: Employee = employeeList.getEmployee(eid);
        (<HTMLInputElement> document.querySelector('input[name="name"]')).value = (el.getName());
        (<HTMLInputElement> document.querySelector('input[name="email"]')).value = (el.getEmail());
        (<HTMLInputElement> document.querySelector('input[name="mobile"]')).value = (el.getMobile());
        (<HTMLInputElement> document.querySelector('input[name="landline"]')).value = (el.getLandline());
        (<HTMLInputElement> document.querySelector('input[name="website"]')).value = (el.getWebsite());
        document.getElementById('address').innerHTML = (el.getAddress());
        document.getElementById('submit-button').innerHTML = (`<button class="btn me-2 btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="closeForm">Close</button><button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" value="${eid}" id="saveEmployee">Save</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    };
    let saveEmployee = (e) => {
        let employee = serializeArray(document.getElementById('employee-form'));
        let returnValue: Boolean = true;
        for(let i = 0; i < employee.length - 3; i++){
            if(employee[i].value.length < 1 && i != 3 && i !== 4){
                document.getElementById(`${employee[i].name + 'Required'}`).style.display = 'block';
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        returnValue = employeeList.update(e.target.value, employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value);
        e.preventDefault();
        if(!returnValue) return false;
        (<HTMLFormElement> document.getElementById('employee-form')).reset();
        document.getElementById('address').innerHTML = ('');
        document.getElementById('employee-form-div').style.display = 'none';
    };
    let deleteEmployee =  (e) => {
        if(confirm('Are you sure you want to delete the contact ?')) employeeList.delete(e.target.value);
    };
};

class Employees{
    private employees: Array<Employee> = [];
    constructor(){
        this.add(new Employee('e'+this.employees.length,'Praveen Battula', 'praveen@technovert.com', '9292929232', '040301231215', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Chandermani Arora', 'chandermani@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
    }
    public emailCheck(email: string, eid: string){
        let returnValue = true;
        this.employees.forEach((em) => {
            if(em.getEmail() === email && em.getEid() !== eid){
                document.getElementById('emailDuplicate').style.display = 'block';
                returnValue = false;
            }
        })
        return returnValue;
    }
    public mobileCheck(mobile: string, eid: string){
        let returnValue = true;
        this.employees.forEach((em) => {
            if(em.getMobile() === mobile && em.getEid() !== eid){
                document.getElementById('mobileDuplicate').style.display = 'block';
                returnValue = false;
            } 
        })
        return returnValue;
    }
    public sortEmployees(eid: string){
        this.employees = this.employees.sort((a, b) => (a.getName().localeCompare(b.getName())));
        document.getElementById('v-pills-tab').innerHTML = '';
        document.getElementById('v-pills-tabContent').innerHTML = '';
        document.querySelectorAll(`tab-pane`).forEach(el => el.remove());
        this.employees.forEach((employee) => {
            employee.createInPage();
        });
        document.getElementById(`v-pills-${eid}-tab`).classList.add('active');
        document.getElementById(`v-pills-${eid}`).classList.add('active');
    }
    public add(employee: Employee){
        let emailDuplicate = this.emailCheck(employee.getEmail(), employee.getEid());
        let mobileDuplicate = this.mobileCheck(employee.getMobile(), employee.getEid());
        if(emailDuplicate && mobileDuplicate){
            this.employees.push(employee);
            this.sortEmployees(employee.getEid());
            return true;
        } else return false;
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
        let emailDuplicate = this.emailCheck(email, eid);
        let mobileDuplicate = this.mobileCheck(mobile, eid);
        if(emailDuplicate && mobileDuplicate){
            this.employees.forEach((el) => {
                if(el.getEid() === eid){
                    el.updateDetails(name, email, mobile, landline, website, address);
                    el.updatePage();
                }
            })
            return true;
        } else return false;
        
    }
    public delete(eid: string){
        this.employees = this.employees.filter(el => el.getEid() !== eid);
        document.getElementById(`v-pills-${eid}-tab`).remove();
        document.getElementById(`v-pills-${eid}`).remove();
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
    public createInPage(): void{
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
        document.getElementById('v-pills-tab').insertAdjacentHTML('beforeend',html);
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
        document.getElementById('v-pills-tabContent').insertAdjacentHTML('beforeend',html);
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
        document.getElementById(`v-pills-${this.eid}-tab`).innerHTML = (html);
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
        document.getElementById(`v-pills-${this.eid}-details`).innerHTML = ( html);
    }
}