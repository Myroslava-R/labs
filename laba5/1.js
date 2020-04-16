const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
class person {
    constructor(name, surname, gender, dob) {
        this.name = name;
        this.surname = surname;
        this.gender = gender;
        this.dob = dob;
    }
}

var fname = document.getElementById('n').value;
var lname = document.getElementById('s').value;
var gend = document.getElementById('g').value;
var day = document.getElementById('d').value;


function y_code() {

    var p = new person(fname, lname, gend, day);
    var code = "";

    // Surname code
    surnm = p.surname.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
    surnm += p.surname.replace(/[^AEIOU]/gi, "");
    surnm += "XXX";
    surnm = surnm.substr(0, 3);
    code += surnm.toUpperCase();

    // Name code
    nmcd = p.name.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, "");
    nmcd += "XXX";
    nmcd = nmcd.substr(0, 3);
    code += nmcd.toUpperCase();

    // Birthday code
    valid = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
    arr = p.dob.match(valid);
    day = arr[1];
    month = arr[3];
    year = arr[4];

    code += year.substr(-2);

    code += months[month];

    if (p.gender == 'M') {
        dayofbirth = day;
        if (dayofbirth < 10) {
            code += '0';
            code += dayofbirth;
        } else {
            code += dayofbirth;
        }
    } else {
        code += (parseInt(day) + 40);
    }
    var html = code;

    document.getElementById('result').innerHTML = html;
}
document.getElementById('button').addEventListener('click', y_code);