import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Comments.module.css'
import autosize from "autosize";
import useUsers from './../../hooks/useUsers'

function Comment(props) {
  const { users } = useUsers();
  const [add, setAdd] = useState(false)
  const [content, setContent] = useState("");
  const [save, setSave] = useState(false);
  const [userId,setUserId] = useState(null);
  const handleAddClick = () => {
    setAdd(!add)
  }
  const handleContentChange = (e) => {
    setContent(e.target.value)
    console.log(content.length);
    content==""? setSave(false) : setSave(true);
  }
  const handleUserChange = (e) => setUserId(parseInt(e.target.value));
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
                    {users.map((user) => (
                      <option key={user.id} value={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                {save && (
                  <button className={styles.save_reply_button} onClick={handleAddClick} ><i className="fa fa-save" /> Save</button>
                )}
              </div>
            </div>
          </div>

        )}
      </div>

    </div>

  )
}
const mapStateToProps = state => {
  return {
    userId: state.userId,
    content: state.content
  }
}
export default Comment