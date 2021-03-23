var Employee = /** @class */ (function () {
    function Employee(eid, name, score) {
        this.eid = eid;
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
    Employee.prototype.getEid = function () {
        return this.eid;
    };
    Employee.prototype.updateGrid = function () {
        var html = "\n            <tr>\n                <th scope=\"row\"><input type=\"checkbox\" id=\"" + this.eid + "\" name=\"employee\" class=\"employee-check\" value=" + this.score + "></th>\n                <td><input class=\"employee-name d-none\" value=\"" + this.name + "\" disabled><span id=\"" + this.eid + "-editable-name\">" + this.name + "</span></td>\n                <td>" + this.score + "</td>\n                <td>" + this.name.toLowerCase().split(' ')[0] + "@technovert.com</td>\n            </tr>\n        ";
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    };
    return Employee;
}());
var check = function (employees) {
    for (var i = 0; i < employees.length; i++) {
        if (document.getElementById("" + employees[i].getEid()).checked === false)
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
    ['input', 'change'].forEach(function (e) {
        document.getElementById('search').addEventListener(e, function () {
            var str = document.getElementById('search').value.toString();
            for (var i = 0; i < employees.length; i++) {
                if (employees[i].getName().indexOf(str) >= 0) {
                    var tempStr = employees[i].getName().replace(str, "<span style=\"background-color: gold; color: black;\">" + str + "</span>");
                    document.getElementById(employees[i].getEid() + "-editable-name").innerHTML = (tempStr);
                }
            }
        });
    });
    document.getElementById('check-all').addEventListener('click', function (event) {
        var checked = document.getElementById('check-all').checked;
        for (var i = 0; i < employees.length; i++) {
            document.getElementById("" + employees[i].getEid()).checked = checked;
        }
    });
    (document.querySelectorAll('.employee-check')).forEach(function (element) {
        element.addEventListener('change', function (e) {
            document.getElementById('check-all').checked = check(employees);
        });
    });
    document.getElementById('calculate').addEventListener('click', function () {
        var sum = 0, count = 0, max = -1, length = employees.length;
        for (var i = 0; i < length; i++) {
            if (max < employees[i].getScore())
                max = employees[i].getScore();
            sum += employees[i].getScore();
            count += 1;
        }
        var avg = sum / count;
        document.getElementById('average').innerHTML = (avg.toString());
        document.getElementById('maximum').innerHTML = (max.toString());
    });
};
