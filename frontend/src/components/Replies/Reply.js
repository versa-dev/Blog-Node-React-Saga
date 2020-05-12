import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./Reply.module.css";
import useUsers from './../../hooks/useUsers'

const Reply = (props) => {
    const reply = props.reply;
    const { users } = useUsers();
    
    return (
        <div className={styles.reply}>
            <header className={styles.reply__header}>
                <h2 className={styles.reply__heading}>
                    {users[reply.user_id].name} replied...
                </h2>
                <span className={styles.comment_timestamp}>
                    {new Intl.DateTimeFormat("en-US", {
                        dateStyle: "medium",
                        timeStyle: "short",
                    }).format(new Date(reply.created_at))}
                </span>
            </header>
            <p className={styles.reply__body}>{reply.content}</p>
        </div>
    )
}
export default Reply;