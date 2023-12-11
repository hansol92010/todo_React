import React, { useState } from 'react'

export default function List({id, title, completed, todoData, setTodoData, handleRemove}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");

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
      <div>
        <form>
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={handleEditChange}
            />
          </div>
        </form>
        <div>
          <button onClick={() => setIsEditing(false)}>돌아가기</button>
          <button onClick={handleSubmit}>저장</button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div>
        <input
          type="checkbox"
          defaultChecked={completed}
          onClick={() => handleCompleteCheck(id)}
        />
        <span style={{
          "textDecoration" : completed ? "line-through" : undefined
        }}>{title}</span>
        </div>
        <div>
          <button onClick={() => handleRemove(id)}>삭제</button>
          <button onClick={() => setIsEditing(true)}>수정</button>
        </div>
      </div>
    )
  }
}
