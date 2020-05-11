import React, { useEffect, useState, useRef, useCallback } from "react";
import autosize from "autosize";

import "./App.css";
import useComments from "../../hooks/useComments";
import useUsers from "../../hooks/useUsers";
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
