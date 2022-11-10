import React from 'react'

interface PropsType { }

const copyright: React.CSSProperties={
    height:'80px',
    textAlign:'center',
    backgroundColor:'#1C252E',
    color:'white',
    display:'flex',
    // justifyContent:'center',
    alignItems:'center',
    // padding:'0 80px'
}

const CopyRight: React.FC<PropsType> = () => {
    return (
        <div style={copyright}>
            <p style={{marginBottom:'0 !important'}}>&copy; Platute Pty Limited, ABN 67 638 488 712 <br/> level 7, 11 York st, Sydney NSW 2000, Australia</p>
        </div>
    )
}

export default CopyRight