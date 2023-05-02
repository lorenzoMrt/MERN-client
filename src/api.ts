import { ICustomer } from "./Models/Customer";

export function getAllCustomers() {
    return fetch('http://localhost:3000/api/customers/all')
        .then(res => res.json())
        .then(res => res.customers);
}

export function addCustomer(customer: ICustomer): Promise<Response> {
    return fetch('http://localhost:3000/api/customers/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customer })
    });
}