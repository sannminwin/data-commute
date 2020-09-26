import React, { useState } from 'react';

const Like = (props) => {
    console.log(props);
    const [like, setLike]  = useState(false);

    const toggleLike = () => {
        setLike(!like);
        props.likeMe(like);
    }
    console.log(like);
    return (
        <div> 
            <button onClick={toggleLike} className="ui button">
            Like
            </button>
        </div>
    )
}

export default Like;
