import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    props.users.length > 0 && (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} has age {user.age}
              </li>
            );
          })}
        </ul>
      </Card>
    )
  );
};

export default UsersList;
