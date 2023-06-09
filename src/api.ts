import { ICustomer } from "./Models/Customer";

export function getAllCustomers() {
    return fetch('http://3.253.110.99:8081/api/customers/all')
        .then(res => res.json())
        .then(res => res.customers);
}

export function addCustomer(customer: ICustomer): Promise<Response> {
    return fetch('http://3.253.110.99:8081/api/customers/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customer })
    });
}