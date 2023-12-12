import React, { useState } from 'react';
import style from "./List.module.css";

const List = React.memo(({id, title, completed, todoData, setTodoData, handleRemove}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  // 체크박스를 눌렀을 때
  const handleCompleteCheck = (id) => {
    const newTodoData = todoData.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  }

  // 입력 필드 title 수정
  const handleEditChange = (e) => {
    // console.log(e.target.value);
    setEditedTitle(e.target.value);
  }

  // save 버튼(title 수정 완료)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoData = todoData.map(todo => {
      if(todo.id === id) {
        todo.title = editedTitle;
      }
      return todo;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
    setEditedTitle("");
    setIsEditing(false);
  }

  if(isEditing) {
    return (
      <div className={`${style.list}`}>
        <form>
          <div className={`${style.item}`}>
            <input
              type="text"
              className={`${style.item_input}`}
              value={editedTitle}
              onChange={handleEditChange}
            />
          </div>
        </form>
        <div className={`${style.item}`}>
          <button className={`${style.item_listBtn}`} onClick={handleSubmit}>저장</button>
          <button className={`${style.item_listBtn}`} onClick={() => setIsEditing(false)}>돌아가기</button>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${style.list}`}>
        <div className={`${style.item}`}>
          <input
            type="checkbox"
            defaultChecked={completed}
            onClick={() => handleCompleteCheck(id)}
          />
          <span style={{
            "textDecoration" : completed ? "line-through" : undefined
          }}>{title}</span>
        </div>
        <div className={`${style.item}`}>
          <button className={`${style.item_listBtn}`} onClick={() => handleRemove(id)}>삭제</button>
          <button className={`${style.item_listBtn}`} onClick={() => setIsEditing(true)}>수정</button>
        </div>
      </div>
    )
  }
})

export default List;