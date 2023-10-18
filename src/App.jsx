import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="dsp-flex container">
      <Sidebar />
      <div className="w100" style={{background: "#f5f6f8"}}>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
