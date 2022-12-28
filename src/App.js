import logo from "./logo.svg";
import "./App.css";
import Counter from "./Apps/useState/Counter";
import MouseContainer from "./Apps/useEffect/MouseContainer";
import IntervalCounter from "./Apps/useEffect/IntervalCounter";
import CounterOne from "./Apps/useReducer/CounterOne";

function App() {
  return (
    <>
      <div className="bg-slate-500 h-screen">
        {/* <Counter /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalCounter /> */}
        <CounterOne />
      </div>
    </>
  );
}

export default App;
