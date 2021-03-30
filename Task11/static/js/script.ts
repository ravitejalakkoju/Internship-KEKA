const inputChangeEvents: string[] = ['input', 'change'];
const hide = (element: string) => {
    document.getElementById(element).style.display = 'none';
}
const show = (element: string) => {
    document.getElementById(element).style.display = 'block';
}

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
    let resetEmployeeForm = () => {
        (<HTMLFormElement> document.getElementById('employee-form')).reset();
    }

    const formElements = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        mobileNum: document.getElementById('mobileNum'),
        landline: document.getElementById('landline'),
        website: document.getElementById('website'),
        address: document.getElementById('address')
    }

    let formValidation = () => {

        inputChangeEvents.forEach((event) => formElements.name.addEventListener(event,() => {
            hide('nameRequired');
        }) );

        inputChangeEvents.forEach((event) => formElements.email.addEventListener(event,() => {
            hide('emailRequired');
            hide('emailDuplicate');
        }) );

        inputChangeEvents.forEach((event) => formElements.email.addEventListener(event,() => {
            let email = (<HTMLInputElement> formElements.email).value;
            validateEmail(email) ? hide('emailHelp') : show('emailHelp');
            employeeList.emailCheck(email, 'e') ? hide('emailDuplicate') : show('emailDuplicate');
        }) );

        inputChangeEvents.forEach((event) => formElements.mobileNum.addEventListener(event,() => {
            hide('mobileRequired');
            hide('mobileDuplicate');
            let mobileNum = (<HTMLInputElement> formElements.mobileNum).value;
            validateMobileNum(mobileNum.toString()) ? hide('mobileHelp') : show('mobileHelp');
        }) );

        inputChangeEvents.forEach((event) => formElements.landline.addEventListener(event,() => {
            hide('landlineRequired');
        }) );

        inputChangeEvents.forEach((event) => formElements.website.addEventListener(event,() => {
            hide('websiteRequired');
            let website = (formElements.website as HTMLInputElement).value;
            validateWebpage(website) ? hide('websiteHelp') : show('websiteHelp');
        }) );

        inputChangeEvents.forEach((event) => formElements.address.addEventListener(event,() => {
            hide('addressRequired')  ;
        }) );

    };

    formValidation();

    hide('employee-form-div');

    let addEmployeeFunc = () => {
        document.getElementById('addEmployee').classList.add('active');
        show('employee-form-div');
        resetEmployeeForm();
        document.querySelectorAll('.invalid-feedback').forEach((e) => {
            (<HTMLElement> e).style.display = 'none';
        });
        formElements.address.innerHTML = '';
        document.getElementById('submit-button').innerHTML = (`<button class="btn me-2 btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="closeForm">Close</button><button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="submitEmployee">Add</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    };

    let closeForm = () => {
        document.querySelectorAll('.invalid-feedback').forEach((e) => {
            (<HTMLElement> e).style.display = 'none';
        });
        document.getElementById('addEmployee').classList.remove('active');
        hide('employee-form-div');
        resetEmployeeForm();
    }

    document.getElementById('addEmployee').addEventListener('click', () => {
        addEmployeeFunc();
    });

    document.addEventListener('keydown', (function(e) {
        if(e.key == "a" && e.altKey) {
            addEmployeeFunc();
        }
    }) );
    
    document.getElementById('close-form').addEventListener('click', () => {
        closeForm();
    });

    document.addEventListener('keydown', (e) => {
        if(e.keyCode === 27){
            closeForm();
        }
    });
    interface inputSchema { name: string, value: string };
    let serializeArray = (form) => {
        let formDetails: inputSchema[] = [];
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
                show(`${employee[i].name + 'Required'}`);
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        returnValue = employeeList.add(new Employee('e'+employeeList.employeeCount(), employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value));
        e.preventDefault();
        if(!returnValue) return false;
        document.getElementById('addEmployee').classList.remove('active');
        hide('employee-form-div');
        resetEmployeeForm();
    };

    let editEmployee = (e) =>{
        let id = e.target.value;
        show('employee-form-div');
        let el: Employee = employeeList.getEmployee(id);
        (<HTMLInputElement> formElements.name).value = (el.getName());
        (<HTMLInputElement> formElements.email).value = (el.getEmail());
        (<HTMLInputElement> formElements.mobileNum).value = (el.getMobile());
        (<HTMLInputElement> formElements.landline).value = (el.getLandline());
        (<HTMLInputElement> formElements.website).value = (el.getWebsite());
        formElements.address.innerHTML = (el.getAddress());
        document.getElementById('submit-button').innerHTML = (`<button class="btn me-2 btn-success rounded-0 p-1 ps-5 pe-5" type="submit" id="closeForm">Close</button><button class="btn btn-success rounded-0 p-1 ps-5 pe-5" type="submit" value="${id}" id="saveEmployee">Save</button>`);
        document.getElementById('employee-form-div').scrollIntoView();
    };

    let saveEmployee = (e) => {
        let employee = serializeArray(document.getElementById('employee-form'));
        let returnValue: Boolean = true;
        for(let i = 0; i < employee.length - 3; i++){
            if(employee[i].value.length < 1 && i != 3 && i !== 4){
                show(`${employee[i].name + 'Required'}`);
                returnValue = false;
            }
        }
        if(!returnValue) return false;
        returnValue = employeeList.update(e.target.value, employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value,employee[5].value);
        e.preventDefault();
        if(!returnValue) return false;
        resetEmployeeForm();
        formElements.address.innerHTML = ('');
        hide('employee-form-div');
        ;
    };

    let deleteEmployee =  (e) => {
        if(confirm('Are you sure you want to delete the contact ?')) employeeList.delete(e.target.value);
    };

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
};

class Employees{
    private employees: Array<Employee> = [];

    constructor(){
        this.add(new Employee('e'+this.employees.length,'Praveen Battula', 'praveen@technovert.com', '9292929232', '040301231215', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Chandermani Arora', 'chandermani@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Pavan Kasukurthi', 'pavan@technovert.com', '9951282998', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Pranay Suryapet', 'pranay@technovert.com', '9292929224', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Varun Chittimella', 'varun@technovert.com', '9292929223', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Nikhil Reddy', 'nikhil@technovert.com', '9292929239', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e'+this.employees.length,'Bharat Chillimunta', 'bharat@technovert.com', '9292959239', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
    }

    public emailCheck(email: string, id: string){
        let returnValue = true;
        this.employees.forEach((em) => {
            if(em.getEmail() === email && em.getid() !== id){
                show('emailDuplicate');
                returnValue = false;
            }
        })
        return returnValue;
    }

    public mobileCheck(mobile: string, id: string){
        let returnValue = true;
        this.employees.forEach((em) => {
            if(em.getMobile() === mobile && em.getid() !== id){
                show('mobileDuplicate');
                returnValue = false;
            } 
        })
        return returnValue;
    }

    public sortEmployees(id: string){
        this.employees = this.employees.sort((a, b) => (a.getName().localeCompare(b.getName())));
        document.getElementById('v-pills-tab').innerHTML = '';
        document.getElementById('v-pills-tabContent').innerHTML = '';
        document.querySelectorAll(`tab-pane`).forEach(el => el.remove());
        this.employees.forEach((employee) => {
            employee.createInPage();
        });
        document.getElementById(`v-pills-${id}-tab`).classList.add('active');
        document.getElementById(`v-pills-${id}`).classList.add('active');
    }

    public add(employee: Employee){
        let emailDuplicate = this.emailCheck(employee.getEmail(), employee.getid());
        let mobileDuplicate = this.mobileCheck(employee.getMobile(), employee.getid());
        if(emailDuplicate && mobileDuplicate){
            this.employees.push(employee);
            this.sortEmployees(employee.getid());
            return true;
        } else return false;
    }

    public getEmployee(id: string): Employee{
        let foundEmp:Employee = null;
        this.employees.forEach((el) => {
            if(el.getid() === id){
                foundEmp = el;
            }
        });
        return foundEmp;
    };

    public update(id: string, name:string, email:string, mobile:string, landline:string, website: string, address:string){
        let emailDuplicate = this.emailCheck(email, id);
        let mobileDuplicate = this.mobileCheck(mobile, id);
        if(emailDuplicate && mobileDuplicate){
            this.employees.forEach((el) => {
                if(el.getid() === id){
                    el.updateDetails(name, email, mobile, landline, website, address);
                    el.updatePage();
                }
            })
            return true;
        } else return false;
        
    }
    
    public delete(id: string){
        this.employees = this.employees.filter(el => el.getid() !== id);
        document.getElementById(`v-pills-${id}-tab`).remove();
        document.getElementById(`v-pills-${id}`).remove();
    }

    public employeeCount(){
        return this.employees.length;
    }
}

class Employee{
    private id: string;
    private name:string;
    private email: string;
    private mobile: string;
    private landline: string;
    private website: string;
    private address: string;

    constructor(id:string, name:string, email:string, mobile:string, landline:string, website: string, address:string){
        this.id = id;
        this.name = name;
        this.email= email;
        this.mobile= mobile;
        this.landline= landline;
        this.website= website;
        this.address= address;
    }
    public getid(){
        return this.id;
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
                <button class="nav-link text-left rounded-0 p-2 pt-1 border border-secondary" id="v-pills-${this.id}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${this.id}" type="button" role="tab" aria-controls="v-pills-${this.id}" aria-selected="true" onclick="document.getElementById('v-pills-tabContent').scrollIntoView();">
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
                <div class="tab-pane fade show ms-lg-5 position-relative" id="v-pills-${this.id}" role="tabpanel" aria-labelledby="v-pills-${this.id}-tab">
                    <div class="options small position-absolute top-0 end-0">
                        <button class="edit border-0 bg-transparent text-secondary edit-employee" value='${this.id}'><i class="fas fa-pen me-1"></i>EDIT</button>
                        <button class="delete ms-md-2 border-0 bg-transparent text-secondary delete-employee" value='${this.id}'><i class="fas fa-trash-alt me-1"></i>DELETE</button>
                    </div>
                    <div id="v-pills-${this.id}-details">
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
        document.getElementById(`v-pills-${this.id}-tab`).innerHTML = (html);
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
        document.getElementById(`v-pills-${this.id}-details`).innerHTML = ( html);
    }
}