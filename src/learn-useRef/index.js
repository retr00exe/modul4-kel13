import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
function Tugas() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <><div class="Main">
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Tugas />);

export default Tugas;