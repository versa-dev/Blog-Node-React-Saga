import React from "react";
import "./App.css";
import Compose from '../Compose/Compose'
import CommetnList from '../Comments/CommentList'

function App() {


  return (
    <div className="comments-container">
      <header className="comments-header">
        <h1>Comments</h1>
      </header>
      <Compose />
      <CommetnList />
     </div>
  );
}

export default App;
