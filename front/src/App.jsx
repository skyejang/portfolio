import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ProjactPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import DetailPage from "./pages/DetailPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjactPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
{
  /* <Heading
  as="h1"
  color="red"
  width="2px"
  text="HELLO WORLD!!!"
  reverse={true}
/>
<Heading
  as="h2"
  color="blue"
  width="3px"
  text="HELLO WORLD!!!"
  reverse={false}
/> */
}

export default App;
