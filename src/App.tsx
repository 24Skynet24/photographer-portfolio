import {Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Book from "./views/Book";
import Contacts from "./views/Contacts";
import About from "./views/About";
import Header from "./components/Header/index";

function App() {
  return (
    <>
        <Header/>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default App
