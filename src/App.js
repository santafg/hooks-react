import logo from "./logo.svg";
import "./App.css";
import Counter from "./Apps/useState/Counter";
import MouseContainer from "./Apps/useEffect/MouseContainer";

function App() {
  return (
    <>
      <div className="bg-slate-500 h-screen">
        {/* <Counter /> */}
        <MouseContainer />
      </div>
    </>
  );
}

export default App;
