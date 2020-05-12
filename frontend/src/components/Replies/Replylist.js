import React, { useEffect, useState, useRef, useCallback } from "react";
import useReplies from "../../hooks/useReplies";
import Reply from "./Reply";

function ReplyList( props ){
    const {replies} = useReplies();
    
    const getMyReplies = (reply) => {
        return reply.comment_id == props.id
    }
    return(
        <div>
            
            {
                [...replies]
                .filter(getMyReplies)
                .map((reply)=>{
                    return <Reply reply={reply}/>
                })
            }
            
        </div>
    )
}
export default ReplyList;