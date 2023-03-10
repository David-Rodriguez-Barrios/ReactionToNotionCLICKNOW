import React, { createElement, useState }  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Default_page from "./Default_page";
import View from "./View";
import Editor from "./Editor";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const [value, setValue] = useState([{id:1,name:'Todo1',complete:false}]);
root.render(
  <React.StrictMode >
  <BrowserRouter>
    <Routes>
      <Route element={<App />} >
        <Route exact path="/" element={<Default_page />} ></Route>
        <Route path="/:id" element={<View />}></Route>
        <Route path="/:id/edit" element={<Editor />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<About />}></Route>
  <Route path="/skills" element={<Skills />}></Route>
</Routes>
</BrowserRouter> */}

export default App;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
