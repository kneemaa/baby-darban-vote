import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoMatch from "./pages/NoMatch"
import Home from "./pages/Home"

// This is mostly boiler plate
const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* when anyone goes to the path "/" (aka home) show them the Home Page */}
      <Route path="/" element={<Home/>}/>
      {/* when anyone goes to a path that isn't defined above, show them the 404 page */}
      <Route path="*" element={<NoMatch/>}/>
    </Routes>
  </BrowserRouter>,
  rootElement
)
