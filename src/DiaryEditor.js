import React, { useContext, useEffect, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //alert("1글자 이상 입력해주세요");
      //알림을 띄우는건 사용자가 선호하는 방향이 아님
      //-> 포커스 띄워서 해결하자
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //alert("5글자 이상 입력해주세요");
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
          // onChange={(e) => {
          //이벤트
          //setAuthor(e.target.value);
          //   setState({
          //     ...state,
          //     author: e.target.value, //순서에 유의** 반대가 되면 덮어씌워짐
          ////그래서 원래 스테이트 주고 업데이트 해야 함
          //content: state.content,
          //    });
          //  }}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하자!!</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
