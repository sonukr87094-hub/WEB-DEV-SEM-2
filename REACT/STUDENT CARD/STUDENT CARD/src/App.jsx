import React, { useState } from "react";

function App() {
  // State
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [items, setItems] = useState(["Learn React", "Build Projects"]);

  // Functions
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  const addItem = () => {
    if (name.trim() === "") return;
    setItems([...items, name]);
    setName("");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Practice App 🚀</h1>

      {/* Counter Section */}
      <section>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </section>

      <hr />

      {/* Input + List Section */}
      <section>
        <h2>Todo List</h2>
        <input
          type="text"
          value={name}
          placeholder="Enter task"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addItem}>Add</button>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      {/* Conditional Rendering */}
      <section>
        <h2>Status</h2>
        {count % 2 === 0 ? (
          <p>Even Number 👍</p>
        ) : (
          <p>Odd Number 👀</p>
        )}
      </section>
    </div>
  );
}

export default App;