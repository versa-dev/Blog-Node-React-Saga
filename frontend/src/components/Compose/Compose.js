import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Compose.module.css'
import useUsers from './../../hooks/useUsers'
import autosize from "autosize";
import useComments from "../../hooks/useComments";



const Compose = () =>{ 
    const { users } = useUsers();
    const { createComment } = useComments();
    const textareaRef = useRef();

    useEffect(() => {
      autosize(textareaRef.current);
    }, []);
  
    useEffect(() => {
      if (users.length) {
        setUserId(users[0].id);
      }
    }, [users]);
    const [userId, setUserId] = useState(null);
    const [content, setContent] = useState("");
    const handleContentChange = (e) => setContent(e.target.value);
  
    const handleUserChange = (e) => setUserId(parseInt(e.target.value));
  
    const handleSubmit = useCallback(
      (e) => {
        e.preventDefault();
        if (!userId) {
          alert("No user selected");
          return;
        }
        
        createComment(userId, content);
        setContent("");
      },
      
      [userId, content]
    );
    return(
        <div className={styles.compose}>
            <h2 className={styles.compose__heading}>You say...</h2>
            <form className={styles.compose__body} onSubmit={handleSubmit}>
            <textarea
                ref={textareaRef}
                rows={4}
                placeholder="Enter some text"
                required
                autoFocus
                value={content}
                onChange={handleContentChange}
                className="compose__textarea"
            />
            <div className="compose__dropdown">
                <label htmlFor="user-select">Comment as</label>
                <select
                id="user-select"
                onChange={handleUserChange}
                className="dropdown"
                >
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                    {user.name}
                    </option>
                ))}
                </select>
            </div>
            <div className={styles.compose__button}>
                <button className="button button--primary">Submit</button>
            </div>
            </form>
      </div>   
    )
}


export default Compose;
