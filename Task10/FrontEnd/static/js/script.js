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
        var html = "\n            <tr>\n                <th scope=\"row\"><input type=\"checkbox\" id=\"" + this.eid + "\" name=\"employee\" class=\"employee-check\" value=" + this.score + "></th>\n                <td><input class=\"employee-name d-none\" value=\"" + this.name + "\" disabled><span id=\"" + this.eid + "-editable-name\">" + this.name + "</span></td>\n                <td>" + this.score + "</td>\n                <td>" + this.name.toLowerCase().split(' ')[0] + "@technovert.com</td>\n                <td class=\"d-none d-md-block border-0\"></td>\n            </tr>\n        ";
        document.getElementById('tableBody').insertAdjacentHTML('beforeend', html);
    };
    return Employee;
}());
var check = function (eids) {
    for (var i = 0; i < 8; i++) {
        if (document.getElementById("" + eids[i]).checked === false)
            return false;
    }
    return true;
};
window.onload = function () {
    var employees = [];
    var names = ['Vijay Kumar', 'Sashi Kumar', 'Ravi Teja Lakkoju', 'Bharat Chillimunta', 'Nikhil Vemi', 'Pavan Kasukurthi', 'Pranay Suryapet', 'Varun Chittimella'];
    var scores = [34, 21, 38, 40, 27, 32, 15, 10];
    var eids = ['e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8'];
    for (var i = 0; i < 8; i++) {
        employees.push(new Employee(eids[i], names[i], scores[i]));
    }
    ['input', 'change'].forEach(function (e) {
        document.getElementById('search').addEventListener(e, function () {
            var str = document.getElementById('search').value.toString();
            for (var i = 0; i < 8; i++) {
                if (names[i].indexOf(str) >= 0) {
                    var tempStr = names[i].replace(str, "<span style=\"background-color: gold; color: black;\">" + str + "</span>");
                    document.getElementById(eids[i] + "-editable-name").innerHTML = (tempStr);
                }
            }
        });
    });
    document.getElementById('check-all').addEventListener('click', function (event) {
        var checked = document.getElementById('check-all').checked;
        for (var i = 0; i < 8; i++) {
            document.getElementById("" + eids[i]).checked = checked;
        }
    });
    (document.querySelectorAll('.employee-check')).forEach(function (element) {
        element.addEventListener('change', function (e) {
            document.getElementById('check-all').checked = check(eids);
        });
    });
    document.getElementById('calculate').addEventListener('click', function () {
        var sum = 0, count = 0, max = -1, length = 8;
        for (var i = 0; i < length; i++) {
            if (max < scores[i])
                max = scores[i];
            sum += scores[i];
            count += 1;
        }
        var avg = sum / count;
        document.getElementById('average').innerHTML = (avg.toString());
        document.getElementById('maximum').innerHTML = (max.toString());
    });
};
