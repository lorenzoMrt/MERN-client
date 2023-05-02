import "./App.css";
import Dashboard from "./components/Dashboard";
import { ICustomer } from "./Models/Customer";
import Card from "./components/Card";
import { getAllCustomers } from "./api";
import { useQuery } from "@tanstack/react-query";

function App() {
  const query = useQuery<ICustomer[]>({ queryKey: ["customers"], queryFn: getAllCustomers });
  return (
    <div>
      {query.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Dashboard>
          {query.data && query.data.map((customer) => (
            <Card
              key={customer._id}
              name={customer.name}
              bags={customer.bags}
            />
          ))}
        </Dashboard>
      )}
    </div>
  );
}

export default App;
