import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Comments.module.css'
import autosize from "autosize";


function Comment(props){
    const [add,setAdd] = useState(false)
    const [content,setContent] = useState("");
    const [save,setSave] = useState(false);
    const handleAddClick = () =>{
      setAdd(!add)
    }
    const handleContentChange = (e) => {
      setContent(e.target.value)
      content.length? setSave(true):setSave(false);
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
              <hr />
              <div className="row">
                <button className={styles.add_reply_button} onClick={handleAddClick} style={{"left":"90%"}}><i className="fa fa-comment" /> Reply</button>
                <br />
                <br />
                {add && (
                  <div>
                    <textarea 
                      ref={textareaRef}
                      rows={1}
                      placeholder="Enter some text"
                      required
                      autoFocus
                      onChange={handleContentChange}
                      className={styles.comment__textarea}
                    />
                   
                    
                    <br />
                    {save && (
                      <button className={styles.save_reply_button} onClick={handleAddClick} ><i className="fa fa-save" /> Save</button>
                    )}
                  </div>
                    
                )}
              </div>
              
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