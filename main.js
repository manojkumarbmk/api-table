async function productsData() {
    const products = await fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001");
    const data = await products.json();
    console.log(data);
    var tableBody = document.getElementById("table-body");
    data.forEach(user => {
        row = document.createElement("tr");
        row.innerHTML = `<td>${user.id}</td>
        
        <td>${user.firstName} </td>
        <td>${user.dob} </td>
        <td>${user.age} </td>`;
        tableBody.appendChild(row);

    });
}
window.onload = productsData();