import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content/Content';
import { DataProvider } from './contexts/DataContext';

// comment -> Content -> actionBar -> (like, reply, replyContent)
// create context
// export provider and context
// import provider into component that has data to share.
// wrap child component with provider tag.
// pass data into value prop.
// import context into component that want to recieve data.
// using useContext hook to access data.
function Comment() {
  const data = {
    userName: 'Nanda Ei Tun',
    text: 'No delivery to Vancouver?',
    profileUrl: 'https://writestylesonline.com/wp-content/uploads/2018/11/MIchele-Circle-11.2018.png',
    replys: [
      {
        userName: 'Si Thu Win',
        profileUrl: 'https://writestylesonline.com/wp-content/uploads/2018/11/MIchele-Circle-11.2018.png',
        text: 'you may get adter 14 days quarantine lol'
      }
    ]
  };
  return (
    <div className="App">
      comment --> {data.userName}
      <DataProvider value={data}>
        <Content />
      </DataProvider>
    </div>
  );
}

export default Comment;
