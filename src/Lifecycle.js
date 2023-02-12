import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setConut] = useState(0);
  const [text, setText] = useState("");

  //라이프 사이클 제어 1
  useEffect(() => {
    console.log("Mount!");
  }, []);

  //라이프 사이클 제어 2
  useEffect(() => {
    console.log("Update!");
  });

  //디펜덴시 어레이를 잘 활용하면 감지하고 싶은 것만 감지해서 값이 변화하는 순간 콜백함수 발동
  //라이프 사이클 제어 3
  //카운트가 5가 넘으면 경고 예시>
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setConut(1);
    }
  }, [count]);

  //라이프 사이클 제어 3
  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setConut(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default Lifecycle;
