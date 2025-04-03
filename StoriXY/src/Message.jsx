import React from 'react'

function Message({name, profileImage, handleMessageBackBtn}) {
  return (
    <div className='chat-app'>
        <div className="chat-container">
        <div className="chat-header">
        <span className="material-symbols-outlined" onClick={handleMessageBackBtn}>
arrow_back
</span>
            <div className="profile">
                <img src={profileImage} alt="Profile Picture" />
                <div className='chat-header-active-div'>
                    <h4>{name}</h4>
                    <p>Active Now</p>
                </div>
            </div>
        </div>
        <div className="chat-box">
            <div className="message received">Hello! How are you?</div>
            <div className="message sent">I'm good, thanks! How about you?</div>
        </div>
        <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <span className="material-symbols-outlined">
send
</span>
        </div>
    </div>

    </div>
  )
}

export default Message