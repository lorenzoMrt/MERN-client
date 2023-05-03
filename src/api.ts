import { ICustomer } from "./Models/Customer";

export function getAllCustomers() {
    return fetch('https://3.253.110.99:443/api/customers/all')
        .then(res => res.json())
        .then(res => res.customers);
}

export function addCustomer(customer: ICustomer): Promise<Response> {
    return fetch('https://3.253.110.99:443/api/customers/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ customer })
    });
}