function Student(name,mail) {
    this.name = name;
    this.mail = mail;
    this.Course = [];

    this.Courses = function() {
        console.log(this.Course);
    }
}

function AdmissionOffice() {
    let students = [];

    this.Enroll = function(student) {
        let str = student.name + '(' + ` ${student.mail} ` + ')';
        students.push(str);
    }

    this.assignCourse = function(student,course) {
        student.Course.push(course);
    }

    this.showEnrolledStudents = function() {
        console.log(students);
    }
}

AdmissionOffice.prototype = Object.create(Student.prototype);
AdmissionOffice.prototype.constructor = AdmissionOffice;

const st1 = new Student("K","@1gmail")
const st2 = new Student("G","@2gmail")

const adm = new AdmissionOffice();

adm.Enroll(st1);
adm.Enroll(st2);

adm.assignCourse(st1,"Full Stack")
adm.assignCourse(st2,"DSA")

adm.showEnrolledStudents();

st1.Courses();
st2.Courses();