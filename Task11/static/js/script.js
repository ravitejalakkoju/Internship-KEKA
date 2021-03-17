$(document).ready(function () {
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
    var formValidation = function () {
        $('#name').on('input change', function () {
            $('#nameRequired').hide();
        });
        $('#email').on('input change', function () {
            $('#emailRequired').hide();
        });
        $('#email').on('input change', function () {
            var email = $('#email').val();
            validateEmail(email) ? $('#emailHelp').hide() : $('#emailHelp').show();
        });
        $('#mobileNum').on('input change', function () {
            $('#mobileRequired').hide();
            var mobileNum = $('#mobileNum').val();
            validateMobileNum(mobileNum.toString()) ? $('#mobileHelp').hide() : $('#mobileHelp').show();
        });
        $('#landline').on('input change', function () {
            $('#landlineRequired').hide();
        });
        $('#website').on('input change', function () {
            $('#websiteRequired').hide();
            var website = $('#website').val();
            validateWebpage(website) ? $('#websiteHelp').hide() : $('#websiteHelp').show();
        });
        $('#address').on('input change', function () {
            $('#addressRequired').hide();
        });
    };
    formValidation();
    $('#employee-form-div').hide();
    var addEmployeeFunc = function () {
        $('#employee-form-div').fadeIn();
        $('#employee-form').trigger('reset');
        $('#address').html('');
        $('#submit-button').html("<button class=\"btn btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" id=\"submitEmployee\">Add</button>");
        document.getElementById('employee-form-div').scrollIntoView();
    };
    $('#addEmployee').click(function () {
        addEmployeeFunc();
    });
    $(document).keydown(function (e) {
        if (e.key == "a" && e.altKey) {
            addEmployeeFunc();
        }
    });
    $('#close-form').click(function () {
        $('.invalid-feedback').hide();
        $('#employee-form-div').fadeOut();
        $('#employee-form').trigger('reset');
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            $('.invalid-feedback').hide();
            $('#employee-form-div').fadeOut();
        }
    });
    var employeeList = new Employees();
    $(document).delegate('#submitEmployee', 'click', function (e) {
        var employee = $('#employee-form').serializeArray();
        var returnValue = true;
        for (var i = 0; i < employee.length; i++) {
            if (employee[i].value.length < 1 && i != 3 && i !== 4) {
                $("#" + (employee[i].name + 'Required')).show();
                returnValue = false;
            }
        }
        if (!returnValue)
            return false;
        employeeList.add(new Employee('e' + employeeList.length(), employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value));
        e.preventDefault();
        $('#employee-form-div').hide();
        $('#employee-form').trigger('reset');
    });
    $(document).delegate('.edit-employee', 'click', function (e) {
        var eid = e.target.value;
        $('#employee-form-div').toggle();
        var el = employeeList.getEmployee(eid);
        $('input[name="name"]').val(el.getName());
        $('input[name="email"]').val(el.getEmail());
        $('input[name="mobile"]').val(el.getMobile());
        $('input[name="landline"]').val(el.getLandline());
        $('input[name="website"]').val(el.getWebsite());
        $('#address').html(el.getAddress());
        $('#submitEmployee').hide();
        $('#submit-button').html("<button class=\"btn btn-success rounded-0 p-1 ps-5 pe-5\" type=\"submit\" value=\"" + eid + "\" id=\"editEmployee\">Edit</button>");
        document.getElementById('employee-form-div').scrollIntoView();
    });
    $(document).delegate('#editEmployee', 'click', function (e) {
        var employee = $('#employee-form').serializeArray();
        var returnValue = true;
        for (var i = 0; i < employee.length - 3; i++) {
            if (employee[i].value.length < 1 && i != 3 && i !== 4) {
                $("#" + (employee[i].name + 'Required')).show();
                returnValue = false;
            }
        }
        if (!returnValue)
            return false;
        employeeList.update(e.target.value, employee[0].value, employee[1].value, employee[2].value, employee[3].value, employee[4].value, employee[5].value);
        e.preventDefault();
        $('#employee-form').trigger('reset');
        $('#address').html('');
        $('#employee-form-div').hide();
    });
    $(document).delegate('.delete-employee', 'click', function (e) {
        if (confirm('Are you sure you want to delete the contact ?'))
            employeeList["delete"](e.target.value);
    });
});
var Employees = /** @class */ (function () {
    function Employees() {
        this.employees = [];
        this.add(new Employee('e' + this.employees.length, 'Chandermani Arora', 'chandermani@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
        this.add(new Employee('e' + this.employees.length, 'Praveen Battula', 'praveen@technovert.com', '9292929222', '040301231211', 'http://www.technovert.com', '123 now here, Some street, Madhapur, Hyderabad 500033'));
    }
    Employees.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Employees.prototype.getEmployee = function (eid) {
        var foundEmp = null;
        this.employees.forEach(function (el) {
            if (el.getEid() === eid) {
                foundEmp = el;
            }
        });
        return foundEmp;
    };
    ;
    Employees.prototype.update = function (eid, name, email, mobile, landline, website, address) {
        this.employees.forEach(function (el) {
            if (el.getEid() === eid) {
                el.updateDetails(name, email, mobile, landline, website, address);
                el.updatePage();
            }
        });
    };
    Employees.prototype["delete"] = function (eid) {
        this.employees = this.employees.filter(function (el) { return el.getEid() !== eid; });
        $("#v-pills-" + eid + "-tab").remove();
        $("#v-pills-" + eid).remove();
    };
    Employees.prototype.length = function () {
        return this.employees.length;
    };
    return Employees;
}());
var Employee = /** @class */ (function () {
    function Employee(id, name, email, mobile, landline, website, address) {
        this.eid = id;
        this.name = name;
        this.email = email;
        this.mobile = mobile;
        this.landline = landline;
        this.website = website;
        this.address = address;
        this.createInPage();
    }
    Employee.prototype.getEid = function () {
        return this.eid;
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
        var html = "\n                <button class=\"nav-link text-left rounded-0 p-2 pt-1 border border-secondary\" id=\"v-pills-" + this.eid + "-tab\" data-bs-toggle=\"pill\" data-bs-target=\"#v-pills-" + this.eid + "\" type=\"button\" role=\"tab\" aria-controls=\"v-pills-" + this.eid + "\" aria-selected=\"true\" onclick=\"document.getElementById('v-pills-tabContent').scrollIntoView();\">\n                    <div>\n                        <span class=\"fs-5\">" + this.name + "</span>\n                        <div class=\"lh-1 m-1 small\">\n                            <span class=\"small\">" + this.email + "</span></br>\n                            <span class=\"small\">+91 " + this.mobile + "</span>\n                        </div>\n                    </div>\n                </button>\n        ";
        $('#v-pills-tab').append(html);
    };
    Employee.prototype.createTabContent = function () {
        var html = "\n                <div class=\"tab-pane fade show ms-lg-5 position-relative\" id=\"v-pills-" + this.eid + "\" role=\"tabpanel\" aria-labelledby=\"v-pills-" + this.eid + "-tab\">\n                    <div class=\"options small position-absolute top-0 end-0\">\n                        <button class=\"edit border-0 bg-transparent text-secondary edit-employee\" value='" + this.eid + "'><i class=\"fas fa-pen me-1\"></i>EDIT</button>\n                        <button class=\"delete ms-md-2 border-0 bg-transparent text-secondary delete-employee\" value='" + this.eid + "'><i class=\"fas fa-trash-alt me-1\"></i>DELETE</button>\n                    </div>\n                    <div id=\"v-pills-" + this.eid + "-details\">\n                        <span class=\"fs-4\">\n                            " + this.name + "\n                        </span>\n                        <ul class=\"list-unstyled small text-dark\">\n                            <li class=\"mt-2 mb-2\">Email: " + this.email + "</li>\n                            <li class=\"mt-2 mb-2\">\n                                Mobile: +91 " + this.mobile + " </br>    \n                                Landline: " + this.landline + "\n                            </li>\n                            <li class=\"mt-2 mb-2\">Website: " + this.website + "</li>\n                            <li class=\"mt-2 mb-2\">\n                            Address: <span class=\"roboto\" style=\"font-size: 0.85rem; white-space: pre-wrap;\">" + this.address + "</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n        ";
        $('#v-pills-tabContent').append(html);
    };
    Employee.prototype.updateTab = function () {
        var html = "\n                    <div>\n                        <span class=\"fs-5\">" + this.name + "</span>\n                        <div class=\"lh-1 m-1 small\">\n                            <span class=\"small\">" + this.email + "</span></br>\n                            <span class=\"small\">+91 " + this.mobile + "</span>\n                        </div>\n                    </div>\n        ";
        $("#v-pills-" + this.eid + "-tab").html(html);
    };
    Employee.prototype.updateContent = function () {
        var html = "\n                    <span class=\"fs-4\">\n                        " + this.name + "\n                    </span>\n                    <ul class=\"list-unstyled small text-dark\">\n                        <li class=\"mt-2 mb-2\">Email: " + this.email + "</li>\n                        <li class=\"mt-2 mb-2\">\n                            Mobile: +91 " + this.mobile + " </br>    \n                            Landline: " + this.landline + "\n                        </li>\n                        <li class=\"mt-2 mb-2\">Website: " + this.website + "</li>\n                        <li class=\"mt-2 mb-2\">\n                            Address: " + this.address + "\n                        </li>\n                    </ul>\n        ";
        $("#v-pills-" + this.eid + "-details").html(html);
    };
    return Employee;
}());
