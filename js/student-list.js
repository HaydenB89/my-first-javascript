const students = [
    {id: 1, name: "Alice", major: "Education", sat: 1350, gpa: 3.5},
    {id: 2, name: "Bill", major: "Business", sat: 1140, gpa: 2.6},
    {id: 3, name: "Chris", major: "Management", sat: 1310, gpa: 3.3},
    {id: 4, name: "David", major: "Marketing", sat: 1260, gpa: 3.1},
    {id: 5, name: "Ellen", major: "Engeneering", sat: 1410, gpa: 3.8},
]

const loaded = () => {
    display(students);
}

const display = () => {
    const tbodyCtrl = document.getElementById("studs");
    for(let studs of students) {
        let tr = "<tr>";
        tr += `<td>${studs.id}`;
        tr += `<td>${studs.name}`;
        tr += `<td>${studs.major}`;
        tr += `<td>${studs.sat}`;
        tr += `<td>${studs.gpa}`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}