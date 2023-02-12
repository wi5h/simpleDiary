import React, { useEffect, useState } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("Sub Component Mount");
    return () => {
      console.log("Sub Component Unmount");
    };
  }, []);
  return <div>UN MOUNT TEST</div>;
};

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    console.log("Mount!");
  }, []);

  useEffect(() => {
    console.log("Update!");
  });

  //디펜덴시 어레이를 잘 활용하면 감지하고 싶은 것만 감지해서 값이 변화하는 순간 콜백함수 발동
  //라이프 사이클 제어 3
  //카운트가 5가 넘으면 경고 예시
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>count up</button>
      </div>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button onClick={toggle}>ON/OFF BUTTON</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
