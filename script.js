let count = document.getElementById("count");

let students = localStorage.getItem("students");

if (students == null) {
    students = 0;
}

count.innerHTML = "Students Registered: " + students;

function increaseCount() {
    students++;
    localStorage.setItem("students", students);
    count.innerHTML = "Students Registered: " + students;
}