import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Comments.module.css'
import autosize from "autosize";
import useUsers from './../../hooks/useUsers'
import useReplies from './../../hooks/useReplies';
import ReplyList from "../Replies/ReplyList";


function Comment(props) {
  const { users } = useUsers();
  const { createReply } = useReplies();
  const [add, setAdd] = useState(false)
  const [content, setContent] = useState("");
  const [save, setSave] = useState(false);
  const [userId,setUserId] = useState(null);

  //Get the users who can leave reply
  const filterUser = (user) => {
    return user.id!==props.comment.user_id
  }

  useEffect(() => {
    if (users.length) {
      var new_users = users.filter(filterUser);
      setUserId(new_users[0].id);
    }
  }, [users]);

  //Toggle add reply 
  const handleAddClick = () => {
    setAdd(!add)
  }
  //Set the content and show the save button
  const handleContentChange = (e) => {
    setContent(e.target.value);
    (content.length-1)? setSave(true) : setSave(false);
  }
  const handleUserChange = (e) => setUserId(parseInt(e.target.value));

  const handleSubmit = useCallback(
    (e) => {
      
      if (!userId) {
        alert("No user selected");
        return;
      }
      if(!content){
        alert("No reply written");
        return
      }
      createReply(userId, props.comment.id, content);
      setContent("");
      setAdd(false);
    },
    
    [userId, content]
  );

  const textareaRef = useRef();

  useEffect(() => {
    autosize(textareaRef.current);
  }, []);
  return (
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
        <button className={styles.add_reply_button} onClick={handleAddClick} ><i className="fa fa-comment" /> Reply</button>
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
              value={content}
              className={styles.comment__textarea}
            />
            <br />
            <br />
            <div className="row">
              <div className="col-md-6">
                <div className="compose__dropdown">
                  <label htmlFor="user-select">Comment as</label>
                  <select
                    id="user-select"
                    onChange={handleUserChange}
                    className="dropdown"
                  >
                    {users.filter(filterUser).map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                {save && (
                  <button className={styles.save_reply_button} onClick={handleSubmit}><i className="fa fa-save" /> Save</button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      
      <ReplyList id = {props.comment.id}/>          
    </div>

  )
}

export default Comment