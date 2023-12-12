import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Form from './components/Form';
import Lists from './components/Lists';

function App() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];
    setTodoData(initialTodoData);
  }, []);

  // '입력' 버튼을 눌렀을 때
  const handleSubmit = (e) => {
    if(value === null || value === '') {
      alert("할 일을 입력해주세요");
      return;
    }
    e.preventDefault();
    const newTodo = {
      id : Date.now(),
      title :  value,
      completed : false
    }
    setTodoData(prev => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));
    setValue("");
  }

  // 전체 리스트 삭제
  const handleAllRemove = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  }

  // 개별 리스트에서 X를 눌렀을 때
  const handleRemove = useCallback((id) => {
    const newTodoData = todoData.filter(todo => {
      return todo.id !== id;
    })
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  }, [todoData]);

  return (
    <div className="container">
      <div className="content">
        <div className="todo">
          <h1>할 일 목록</h1>
          <button className="deleteBtn" onClick={handleAllRemove}>Delete All</button>
        </div>
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
        <Lists todoData={todoData} setTodoData={setTodoData} handleRemove={handleRemove} />
      </div>
    </div>
  );
}

export default App;
