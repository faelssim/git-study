function Student(name) {
    this.name = name
}
Student.prototype.say = function() {
    console.log(`Hello ${this.name} --- ${this.grade}`)
}
function ProStudent(props) {
    Student.call(this, props.name)
    this.grade = props.grade
}
function F() {}
F.prototype = Student.prototype
ProStudent.prototype = new F()
// ProStudent.prototype.constructor = ProStudent

const s = new ProStudent({
    name: 'fealssim',
    grade: 2
})
s.say()
console.log(s)
console.log(s instanceof ProStudent)
console.log(s instanceof Student)