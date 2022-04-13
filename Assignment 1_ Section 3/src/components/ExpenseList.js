import { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <Fragment>
      <h2>Let's get started!</h2>

      {props.expenses.map(function (expense, idx) {
        return (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={idx}
          />
        );
      })}
    </Fragment>
  );
};

export default ExpenseList;
