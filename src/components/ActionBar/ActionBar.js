import React, { useState } from 'react';
import Like from '../Like/Like';
import Reply from '../Reply/Reply';
import ReplyContent from '../ReplyContent/ReplyContent';

const ActionBar = (props) => {
    const [like, setLike] = useState(null);
    const likeMe = (like) => {
        setLike(like);
    }

    console.log('like in actionBar : ', like);
    return (
        <div> ActionBar -->  { like ?  'you liked me.' : 'you unliked me.'}

            <Like likeMe={likeMe}/>
            <Reply />
            <ReplyContent/>
        </div>
    )
}

export default ActionBar;
