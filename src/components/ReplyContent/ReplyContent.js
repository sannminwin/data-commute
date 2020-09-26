import React, {useContext} from 'react';
import DataContext from '../../contexts/DataContext';


const ReplyContent = (props) => {
    const data = useContext(DataContext);
    console.log(data);
    return (
        <div> ReplyContent --> {data.userName}
        </div>
    )
}

export default ReplyContent;
