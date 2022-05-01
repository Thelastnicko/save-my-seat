import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import TablesInfo from "./components/TablesInfo/TablesInfo";
import Contact from "./components/Contact/Contact";
import EventComponent from "./components/EventComponent/EventComponent";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainComponent />} />
          <Route path="/tables" element={<TablesInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
