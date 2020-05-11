import React, { useEffect, useState, useRef, useCallback } from "react";
import {connect} from "react-redux"

import styles from './Comments.module.css'
import useComments from "../../hooks/useComments";
import * as actionTypes from "../../redux/actionTypes";


function Comment(props){
    const { comments, createComment } = useComments();
    const handleSubmit = useCallback(
        (e) => {
          e.preventDefault();
    
          if (!props.userId) {
            alert("No user selected");
            return;
          }
    
          createComment(props.userId, props.content);
          
        },
        [props.userId, props.content, createComment]
      );
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