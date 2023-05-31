function limitLength(input, maxLength) {
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

let customers = [];

function addCustomer(name, email, phone, address) {
    let customer = {
        name: name,
        email: email,
        phone: phone,
        address: address
    };
    customers.push(customer);
}

function editCustomer() {
    let index = prompt("Digite o índice do cliente que deseja editar:");
    if (index >= 0 && index < customers.length) {
        let name = prompt("Digite o novo nome:");
        let email = prompt("Digite o novo email:");
        let phone = prompt("Digite o novo telefone:");
        let address = prompt("Digite o novo endereço:");
        customers[index].name = name;
        customers[index].email = email;
        customers[index].phone = phone;
        customers[index].address = address;
        displayCustomers();
    } else {
        alert("Índice inválido!");
    }
}

function removeCustomer() {
    let index = prompt("Digite o índice do cliente que deseja remover:");
    if (index >= 0 && index < customers.length) {
        if (confirm("Tem certeza de que deseja remover este cliente?")) {
            customers.splice(index, 1);
            displayCustomers();
        }
    } else {
        alert("Índice inválido!");
    }
}

function displayCustomers() {
    let table = "<table><tr><th>Índice</th><th>Nome</th><th>Email</th><th>Telefone</th><th>Endereço</th></tr>";
    for (let i = 0; i < customers.length; i++) {
        table += "<tr><td>" + i + "</td><td>" + customers[i].name + "</td><td>" + customers[i].email + "</td><td>" + customers[i].phone + "</td><td>" + customers[i].address + "</td></tr>";
    }
    table += "</table>";
    document.getElementById("customers-table").innerHTML = table;
}

document.getElementById("customer-form").addEventListener("submit", function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    if (phone.length !== 11) {
        alert("O telefone deve ter exatamente 11 dígitos!");
        return;
    }
    addCustomer(name, email, phone, address);
    document.getElementById("customer-form").reset();
    displayCustomers();
});

document.getElementById("display-button").addEventListener("click", function(){
    displayCustomers();
});
