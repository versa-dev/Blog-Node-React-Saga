import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Comments.module.css'
import autosize from "autosize";


function Comment(props){
    const [add,setAdd] = useState(false)
    const handleAddClick = () =>{
      setAdd(!add)
    }
    const textareaRef = useRef();

    useEffect(() => {
      autosize(textareaRef.current);
    }, []);


    return(
        <div key={props.comment.id} className={styles.comment}>
            <header className={styles.comment__header}>
                <h2 className={styles.comment__heading}>
                  {props.comment.user.name} says...
                </h2>
                <span className={styles.comment_timestamp}>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  }).format(new Date(props.comment.created_at))}
                </span>
              </header>
              <p className={styles.comment__body}>{props.comment.content}</p>
              <i class="fa fa-comments" aria-hidden="true" style={{ fontSize: "2vw" }} onClick={handleAddClick}></i>
              {add && (
                <textarea 
                  ref={textareaRef}
                  rows={1}
                  placeholder="Enter some text"
                  required
                  autoFocus
                  
                  className={styles.comment__textarea}
                />
              )}
        </div>
        
    )
}
const mapStateToProps = state => {
    return {
        userId: state.userId,
        content:state.content
    }
}
export default Comment