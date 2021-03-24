var Employee = /** @class */ (function () {
    function Employee(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.updateGrid();
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getScore = function () {
        return this.score;
    };
    Employee.prototype.getid = function () {
        return this.id;
    };
    Employee.prototype.updateGrid = function () {
        var html = "\n            <tr>\n                <th scope=\"row\"><input type=\"checkbox\" id=\"" + this.id + "\" name=\"employee\" class=\"employee-check\" value=" + this.score + "></th>\n                <td><input class=\"employee-name d-none\" value=\"" + this.name + "\" disabled><span id=\"" + this.id + "-editable-name\">" + this.name + "</span></td>\n                <td>" + this.score + "</td>\n                <td>" + this.name.toLowerCase().split(' ')[0] + "@technovert.com</td>\n            </tr>\n        ";
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    };
    return Employee;
}());
var check = function (employees) {
    for (var i = 0; i < employees.length; i++) {
        if (document.getElementById("" + employees[i].getid()).checked === false)
            return false;
    }
    return true;
};
var createEmployees = function () {
    var employees = [];
    employees.push(new Employee('e1', 'Vijay Kumar', 32));
    employees.push(new Employee('e2', 'Sashi Padagala', 40));
    employees.push(new Employee('e3', 'Ravi Teja Lakkoju', 45));
    employees.push(new Employee('e4', 'Bharat Chillimunta', 47));
    employees.push(new Employee('e5', 'Nikhil Vemi', 38));
    employees.push(new Employee('e6', 'Pavan Kasukurthi', 42));
    employees.push(new Employee('e7', 'Pranay Suryapet', 20));
    employees.push(new Employee('e8', 'Varun Chittimella', 46));
    employees.push(new Employee('e9', 'Raghavendra', 30));
    employees.push(new Employee('e10', 'Mano Sri Ram', 49));
    return employees;
};
window.onload = function () {
    var employees = createEmployees();
    var searchSelector = document.getElementById('search');
    var checkAllSelector = document.getElementById('check-all');
    var calculateSelector = document.getElementById('calculate');
    var eachEmployeeSelector = document.querySelectorAll('.employee-check');
    var highlightName = function () {
        var searchValue = searchSelector.value.toString();
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].getName().indexOf(searchValue) >= 0) {
                var highlightedText = employees[i].getName().replace(searchValue, "<span style=\"background-color: gold; color: black;\">" + searchValue + "</span>");
                document.getElementById(employees[i].getid() + "-editable-name").innerHTML = (highlightedText);
            }
        }
    };
    var checkAllEmployees = function () {
        var checked = checkAllSelector.checked;
        for (var i = 0; i < employees.length; i++) {
            document.getElementById("" + employees[i].getid()).checked = checked;
        }
    };
    var calculateSumAndMax = function () {
        var max = Math.max.apply(Math, employees.map(function (o) { return o.getScore(); }));
        var sum = employees.reduce(function (sum, score) { return sum + score.getScore(); }, 0);
        var avg = sum / employees.length;
        document.getElementById('average').innerHTML = (avg.toString());
        document.getElementById('maximum').innerHTML = (max.toString());
    };
    ['input', 'change'].forEach(function (event) {
        searchSelector.addEventListener(event, function () {
            highlightName();
        });
    });
    checkAllSelector.addEventListener('click', function (event) {
        checkAllEmployees();
    });
    eachEmployeeSelector.forEach(function (element) {
        element.addEventListener('change', function () {
            checkAllSelector.checked = check(employees);
        });
    });
    calculateSelector.addEventListener('click', function () {
        calculateSumAndMax();
    });
};
