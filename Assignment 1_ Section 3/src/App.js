import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "KE Bill",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Bike Fuel",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Groceries",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return <ExpenseList expenses={expenses}></ExpenseList>;
}

export default App;
