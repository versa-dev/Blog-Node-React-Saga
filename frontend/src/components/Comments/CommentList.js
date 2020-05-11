import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from './Comments.module.css'

import useComments from "../../hooks/useComments";
import Comment from "./Comment"

const getComments = comment => {
   
    return <Comment comment = {comment} />
}
function CommentList(){
    const { comments } = useComments();
    
    return(
        <div className={styles.comments}>
            {
                [...comments]
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((comment)=>{
                    return <Comment comment={comment} />
                })
            }
        </div>
    )  
}
export default CommentList;