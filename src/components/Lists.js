import React from 'react'
import List from './List'

export default function Lists({todoData, setTodoData, handleRemove}) {
  return (
    <div>
      <div>
        {todoData.map(todo => (
          <List
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            todoData={todoData}
            setTodoData={setTodoData}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  )
}
