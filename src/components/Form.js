import React from 'react';
import style from "./Form.module.css";

export default function Form({value, setValue, handleSubmit}) {

  // 할 일을 입력하기 위한 이벤트
  const handleChange = (e) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  }
  
  return (
    <form className={`${style.input_form}`} onSubmit={handleSubmit}>
      <input
        type="text"
        className={`${style.input_text}`}
        name="value"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        className={`${style.input_submit}`}
        value="입력"
      />
    </form>
  )
}
