import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Nav from "./components/Navbar";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div class="row">
        <div class="col-md-12">
          <Nav />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-2">
              <Sidebar />
            </div>

            <div class="col-md-10">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
