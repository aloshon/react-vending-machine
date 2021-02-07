import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Chips from "./Chips";
import Soda from "./Soda";
import "./App.css"
function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;
