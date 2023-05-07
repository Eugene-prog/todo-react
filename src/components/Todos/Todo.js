import styles from "./Todo.module.css";

function Todo({ todo, index, deleteTodo }) {
  return  (
    <div className={styles.todo}>
      <div className={styles.todoText} onDoubleClick={()=>deleteTodo(index)}>
        {todo}
      </div>
    </div>
  )
}

export default Todo;