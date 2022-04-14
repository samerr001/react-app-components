import React,{useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
  }
  const filteredItem = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {filteredItem.map((item) => (
        <ExpenseItem key={item.title} title={item.title} amount={item.amount} date={item.date} />
      ))}
    </Card>
  );
}

export default Expenses;
