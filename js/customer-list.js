const customers = [
    {id: 1, name: "MAX", active: true, sales: 10000},
    {id: 2, name: "P&G", active: true, sales: 1000000},
    {id: 3, name: "Kroger", active: true, sales: 500000},
    {id: 4, name: "Target", active: false, sales: 100000}
]

const loaded = () => {
    display(customers);
}

const display = (customers) => {
    const tbodyCtrl = document.getElementById("custs");
    for(let cust of customers) {
        let tr = "<tr>";
        tr += `<td>${cust.id}`;
        tr += `<td>${cust.name}`;
        tr += `<td>${(cust.active ? "Yes":"No")}`;
        tr += `<td>${cust.sales}`;
        tr += "</tr>";
        tbodyCtrl.innerHTML += tr;
    }
}