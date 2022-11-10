import React from 'react'



interface PropsType { }

const LastSeen: React.FC<PropsType> = () => {
    return (
        <div style={style} className='LastSeen'></div>
    )
}

export default LastSeen

const style: React.CSSProperties = {
    position: "absolute",
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    backgroundColor: "green",
    border: "3px solid white",
    bottom: "0px",
    right: 0,
}


