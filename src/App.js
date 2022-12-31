import logo from "./logo.svg";
import "./App.css";
import Counter from "./Apps/useState/Counter";
import MouseContainer from "./Apps/useEffect/MouseContainer";
import IntervalCounter from "./Apps/useEffect/IntervalCounter";
import CounterOne from "./Apps/useReducer/CounterOne";
import CounterTwo from "./Apps/useReducer/CounterTwo";
import CounterPractice from "./Apps/useReducer/CounterPractice";
import CounterThree from "./Apps/useReducer/CounterThree";
import { FetchData } from "./Apps/useReducer/FetchData";
import { ParentComponent } from "./Apps/useCallback/ParentComponent";

function App() {
  return (
    <>
      <div className="bg-slate-500 h-screen">
        {/* <Counter /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalCounter /> */}
        {/* <CounterOne /> */}
        {/* <CounterTwo /> */}
        {/* <CounterPractice /> */}
        {/* <CounterThree /> */}
        {/* <FetchData /> */}
        <ParentComponent />
      </div>
    </>
  );
}

export default App;
