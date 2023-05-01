import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { ICustomer } from './Models/Customer';
import Card from './components/Card';

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>([])
  useEffect(() => {
    const testFetch = async () => {
      const response = await fetch('http://localhost:3000/api/customers/all');
      const body = await response.json();
      setCustomers(body.customers);
      console.log(body);
    }
    testFetch();
    return() => {
      testFetch();
    }
  }, [])
  return (
    <div>
      <Dashboard>
        {
          customers.map((customer) => (<Card key={customer._id} name={customer.name} bags={customer.bags}/>)) 
        }
      </Dashboard>
    </div>
  );
}

export default App;
