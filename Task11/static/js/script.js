window.onload = function () {
    var validateEmail = function (email) {
        var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return emailRegExp.test(email);
    };
    var validateWebpage = function (website) {
        var websiteRegExp = /^(ftp|http|https):\/\/(www).[\w\-~]+\.[a-z]+$/;
        return websiteRegExp.test(website);
    };
    var validateMobileNum = function (mobile) {
        var mobileRegExp = /^\d{10}$/;
        return mobileRegExp.test(mobile);
    };
    var inputChangeEvents = ['input', 'change'];
    var formValidation = function () {
        inputChangeEvents.forEach(function (event) { return document.getElementById('name').addEventListener(event, function () {
            document.getElementById('nameRequired').style.display = 'none';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('email').addEventListener(event, function () {
            document.getElementById('emailRequired').style.display = 'none';
            document.getElementById('emailDuplicate').style.display = 'none';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('email').addEventListener(event, function () {
            var email = document.getElementById('email').value;
            validateEmail(email) ? document.getElementById('emailHelp').style.display = 'none' : document.getElementById('emailHelp').style.display = 'block';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('mobileNum').addEventListener(event, function () {
            document.getElementById('mobileRequired').style.display = 'none';
            document.getElementById('mobileDuplicate').style.display = 'none';
            var mobileNum = document.getElementById('mobileNum').value;
            validateMobileNum(mobileNum.toString()) ? document.getElementById('mobileHelp').style.display = 'none' : document.getElementById('mobileHelp').style.display = 'block';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('landline').addEventListener(event, function () {
            document.getElementById('landlineRequired').style.display = 'none';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('website').addEventListener(event, function () {
            document.getElementById('websiteRequired').style.display = 'none';
            var website = document.getElementById('website').value;
            validateWebpage(website) ? document.getElementById('websiteHelp').style.display = 'none' : document.getElementById('websiteHelp').style.display = 'block';
        }); });
        inputChangeEvents.forEach(function (event) { return document.getElementById('address').addEventListener(event, function () {
            document.getElementById('addressRequired').style.display = 'none';
        }); });
    };
    formValidation();
    document.getElementById('employee-form-div').style.display = 'none';
    var addEmployeeFunc = function () {
        document.getElementById('addEmployee').classList.add('active');
        document.getElementById('employee-form-div').style.display = 'block';
        document.getElementById('employee-form').reset();
        document.querySelectorAll('.invalid-feedback').forEach(function (e) {
            e.style.display = 'none';
        });
        document.getElementById('address').innerHTML = '';
        document.getElementById('submit-button').innerHTML = ("<button class=\"btn me-2 btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" id=\"closeForm\">Close</button><button class=\"btn btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" id=\"submitEmployee\">Add</button>");
        document.getElementById('employee-form-div').scrollIntoView();
    };
    var closeForm = function () {
        document.querySelectorAll('.invalid-feedback').forEach(function (e) {
            e.style.display = 'none';
        });
        document.getElementById('addEmployee').classList.remove('active');
        document.getElementById('employee-form-div').style.display = 'none';
        document.getElementById('employee-form').reset();
    };
    document.getElementById('addEmployee').addEventListener('click', function () {
        addEmployeeFunc();
    });
    document.addEventListener('keydown', (function (e) {
        if (e.key == "a" && e.altKey) {
            addEmployeeFunc();
        }
    }));
    document.getElementById('close-form').addEventListener('click', function () {
        closeForm();
    });
    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            closeForm();
        }
    });
    var employeeList = new Employees();
    var serializeArray = function (form) {
        var formDetails = [];
        form.querySelectorAll('input').forEach(function (element) {
            formDetails.push({ name: element.name, value: element.value });
        });
        formDetails.push({ name: form.querySelector('textarea').name, value: form.querySelector('textarea').value });
        return formDetails;
    };
    var submitEmployee = function (e) {
        var employee = serializeArray(document.getElementById('employee-form'));
        var returnValue = true;
        for (var i = 0; i < employee.length; i++) {
            if (employee[i].value.length < 1 && i != 3 && i !== 4) {
                document.getElementById("" + (employee[i].name + 'Required')).style.display = 'block';
                returnValue = false;
            }
        }
        if (!returnValue)
            return false;
        returnValue = employeeList.add(new Employee('e' + employeeList.employeeCount(), employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value));
        e.preventDefault();
        if (!returnValue)
            return false;
        document.getElementById('addEmployee').classList.remove('active');
        document.getElementById('employee-form-div').style.display = 'none';
        document.getElementById('employee-form').reset();
    };
    var editEmployee = function (e) {
        var id = e.target.value;
        document.getElementById('employee-form-div').style.display = 'block';
        var el = employeeList.getEmployee(id);
        document.querySelector('input[name="name"]').value = (el.getName());
        document.querySelector('input[name="email"]').value = (el.getEmail());
        document.querySelector('input[name="mobile"]').value = (el.getMobile());
        document.querySelector('input[name="landline"]').value = (el.getLandline());
        document.querySelector('input[name="website"]').value = (el.getWebsite());
        document.getElementById('address').innerHTML = (el.getAddress());
        document.getElementById('submit-button').innerHTML = ("<button class=\"btn me-2 btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" id=\"closeForm\">Close</button><button class=\"btn btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" value=\"" + id + "\" id=\"saveEmployee\">Save</button>");
        document.getElementById('employee-form-div').scrollIntoView();
    };
    var saveEmployee = function (e) {
        var employee = serializeArray(document.getElementById('employee-form'));
        var returnValue = true;
        for (var i = 0; i < employee.length - 3; i++) {
            if (employee[i].value.length < 1 && i != 3 && i !== 4) {
                document.getElementById("" + (employee[i].name + 'Required')).style.display = 'block';
                returnValue = false;
            }
        }
        if (!returnValue)
            return false;
        returnValue = employeeList.update(e.target.value, employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value);
        e.preventDefault();
        if (!returnValue)
            return false;
        document.getElementById('employee-form').reset();
        document.getElementById('address').innerHTML = ('');
        document.getElementById('employee-form-div').style.display = 'none';
    };
    var deleteEmployee = function (e) {
        if (confirm('Are you sure you want to delete the contact ?'))
            employeeList["delete"](e.target.value);
    };
    document.getElementById('submit-button').addEventListener('click', function (e) {
        e.preventDefault();
        if (e.target.id === 'submitEmployee')
            submitEmployee(e);
        else if (e.target.id === 'saveEmployee')
            saveEmployee(e);
        else if (e.target.id === 'closeForm')
            closeForm();
        return false;
    });
    document.getElementById('v-pills-tabContent').addEventListener('click', function (e) {
        if (e.target.classList.contains('edit-employee'))
            editEmployee(e);
        else if (e.target.classList.contains('delete-employee'))
            deleteEmployee(e);
    });
};
var Employees = /** @class */ (function () {
    function Employees() {
        this.employees = [];
        this.add(new Employee('e' + this.employees.length, 'Praveen Battula', 'praveen@technovert.com', '9292929232', '040301231215', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e' + this.employees.length, 'Chandermani Arora', 'chandermani@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
    }
    Employees.prototype.emailCheck = function (email, id) {
        var returnValue = true;
        this.employees.forEach(function (em) {
            if (em.getEmail() === email && em.getid() !== id) {
                document.getElementById('emailDuplicate').style.display = 'block';
                returnValue = false;
            }
        });
        return returnValue;
    };
    Employees.prototype.mobileCheck = function (mobile, id) {
        var returnValue = true;
        this.employees.forEach(function (em) {
            if (em.getMobile() === mobile && em.getid() !== id) {
                document.getElementById('mobileDuplicate').style.display = 'block';
                returnValue = false;
            }
        });
        return returnValue;
    };
    Employees.prototype.sortEmployees = function (id) {
        this.employees = this.employees.sort(function (a, b) { return (a.getName().localeCompare(b.getName())); });
        document.getElementById('v-pills-tab').innerHTML = '';
        document.getElementById('v-pills-tabContent').innerHTML = '';
        document.querySelectorAll("tab-pane").forEach(function (el) { return el.remove(); });
        this.employees.forEach(function (employee) {
            employee.createInPage();
        });
        document.getElementById("v-pills-" + id + "-tab").classList.add('active');
        document.getElementById("v-pills-" + id).classList.add('active');
    };
    Employees.prototype.add = function (employee) {
        var emailDuplicate = this.emailCheck(employee.getEmail(), employee.getid());
        var mobileDuplicate = this.mobileCheck(employee.getMobile(), employee.getid());
        if (emailDuplicate && mobileDuplicate) {
            this.employees.push(employee);
            this.sortEmployees(employee.getid());
            return true;
        }
        else
            return false;
    };
    Employees.prototype.getEmployee = function (id) {
        var foundEmp = null;
        this.employees.forEach(function (el) {
            if (el.getid() === id) {
                foundEmp = el;
            }
        });
        return foundEmp;
    };
    ;
    Employees.prototype.update = function (id, name, email, mobile, landline, website, address) {
        var emailDuplicate = this.emailCheck(email, id);
        var mobileDuplicate = this.mobileCheck(mobile, id);
        if (emailDuplicate && mobileDuplicate) {
            this.employees.forEach(function (el) {
                if (el.getid() === id) {
                    el.updateDetails(name, email, mobile, landline, website, address);
                    el.updatePage();
                }
            });
            return true;
        }
        else
            return false;
    };
    Employees.prototype["delete"] = function (id) {
        this.employees = this.employees.filter(function (el) { return el.getid() !== id; });
        document.getElementById("v-pills-" + id + "-tab").remove();
        document.getElementById("v-pills-" + id).remove();
    };
    Employees.prototype.employeeCount = function () {
        return this.employees.length;
    };
    return Employees;
}());
var Employee = /** @class */ (function () {
    function Employee(id, name, email, mobile, landline, website, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    }
    Employee.prototype.getid = function () {
        return this.id;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.getMobile = function () {
        return this.mobile;
    };
    Employee.prototype.getLandline = function () {
        return this.landline;
    };
    Employee.prototype.getWebsite = function () {
        return this.website;
    };
    Employee.prototype.getAddress = function () {
        return this.address;
    };
    Employee.prototype.updateDetails = function (name, email, mobile, landline, website, address) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
    };
    Employee.prototype.createInPage = function () {
        this.createTab();
        this.createTabContent();
    };
    Employee.prototype.updatePage = function () {
        this.updateTab();
        this.updateContent();
    };
    Employee.prototype.createTab = function () {
        var html = "\n                <button class=\"nav-link text-left rounded-0 p-2 pt-1 border border-secondary\" id=\"v-pills-" + this.id + "-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-" + this.id + "\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-" + this.id + "\" aria-selected=\"true\" onclick=\"document.getElementById('v-pills-tabContent').scrollIntoView();\">\n                    <div>\n                        <span class=\"fs-5\">" + this.name + "</span>\n                        <div class=\"lh-1 m-1 small\">\n                            <span class=\"small\">" + this.email + "</span></br>\n                            <span class=\"small\">+91 " + this.mobile + "</span>\n                        </div>\n                    </div>\n                </button>\n        ";
        document.getElementById('v-pills-tab').insertAdjacentHTML('beforeend', html);
    };
    Employee.prototype.createTabContent = function () {
        var html = "\n                <div class=\"tab-pane fade show ms-lg-5 position-relative\" id=\"v-pills-" + this.id + "\" role=\"tabpanel\" aria-labelledby=\"v-pills-" + this.id + "-tab\">\n                    <div class=\"options small position-absolute top-0 end-0\">\n                        <button class=\"edit border-0 bg-transparent text-secondary edit-employee\" value='" + this.id + "'><i class=\"fas fa-pen me-1\"></i>EDIT</button>\n                        <button class=\"delete ms-md-2 border-0 bg-transparent text-secondary delete-employee\" value='" + this.id + "'><i class=\"fas fa-trash-alt me-1\"></i>DELETE</button>\n                    </div>\n                    <div id=\"v-pills-" + this.id + "-details\">\n                        <span class=\"fs-4\">\n                            " + this.name + "\n                        </span>\n                        <ul class=\"list-unstyled small text-dark\">\n                            <li class=\"mt-2 mb-2\">Email: " + this.email + "</li>\n                            <li class=\"mt-2 mb-2\">\n                                Mobile: +91 " + this.mobile + " </br>    \n                                Landline: " + this.landline + "\n                            </li>\n                            <li class=\"mt-2 mb-2\">Website: " + this.website + "</li>\n                            <li class=\"mt-2 mb-2\">\n                            Address: <span class=\"roboto\" style=\"font-size: 0.85rem; white-space: pre-wrap;\">" + this.address + "</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n        ";
        document.getElementById('v-pills-tabContent').insertAdjacentHTML('beforeend', html);
    };
    Employee.prototype.updateTab = function () {
        var html = "\n                    <div>\n                        <span class=\"fs-5\">" + this.name + "</span>\n                        <div class=\"lh-1 m-1 small\">\n                            <span class=\"small\">" + this.email + "</span></br>\n                            <span class=\"small\">+91 " + this.mobile + "</span>\n                        </div>\n                    </div>\n        ";
        document.getElementById("v-pills-" + this.id + "-tab").innerHTML = (html);
    };
    Employee.prototype.updateContent = function () {
        var html = "\n                    <span class=\"fs-4\">\n                        " + this.name + "\n                    </span>\n                    <ul class=\"list-unstyled small text-dark\">\n                        <li class=\"mt-2 mb-2\">Email: " + this.email + "</li>\n                        <li class=\"mt-2 mb-2\">\n                            Mobile: +91 " + this.mobile + " </br>    \n                            Landline: " + this.landline + "\n                        </li>\n                        <li class=\"mt-2 mb-2\">Website: " + this.website + "</li>\n                        <li class=\"mt-2 mb-2\">\n                            Address: " + this.address + "\n                        </li>\n                    </ul>\n        ";
        document.getElementById("v-pills-" + this.id + "-details").innerHTML = (html);
    };
    return Employee;
}());
