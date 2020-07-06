import React from 'react';
import NavMenu from "./views/layouts/NavMenu";
import {Route} from "react-router";
import Router from "./Router";

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
        <NavMenu />
        <Route component={Router} />
    </div>
  );
}

export default App;
