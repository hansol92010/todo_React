import React from 'react'

export default function Form({value, setValue, handleSubmit}) {

  // 할 일을 입력하기 위한 이벤트
  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="value"
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="입력"
        />
      </form>
    </div>
  )
}
