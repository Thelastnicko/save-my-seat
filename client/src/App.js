import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import TablesInfo from "./components/TablesInfo/TablesInfo";
import Contact from "./components/Contact/Contact";
import EventComponent from "./components/EventComponent/EventComponent";
import "antd/dist/antd.css";
import Confirmation from "./components/Confirmation/Confirmation";
import LoginForm from "./components/LoginForm/LoginForm";
import EventEditComponent from "./components/EventEditComponent/EventEditComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<MainComponent />} />
            <Route path="/tables" element={<TablesInfo />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/events" element={<EventComponent />} />
            <Route path="/events/:id" element={<EventEditComponent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
