import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Maincomponent } from "./components/maincomponent/Maincomponent";
import { Layoutcomponent } from "./components/layoutcomponent/Layoutcomponent";
import { MainEngcomponent } from "./components/mainengcomponent/MainEngcomponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/cornelia-cv'>
      <Routes>
        <Route path='/' element={<Layoutcomponent />}>
          <Route index element={<Maincomponent />} />
          <Route path='/en' element={<MainEngcomponent />} />
          {/* <Route path="*" element={<NotFound />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
