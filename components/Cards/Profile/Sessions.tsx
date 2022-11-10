import React from 'react'

interface PropsType {
    session:number
}

const Sessions: React.FC<PropsType> = ({session}) => {
return (
<div>
    <span className='session' style={{fontSize:'14px', color:'var(--lightGrey)',display:'flex', alignItems:'center'}}>Sessions: {session}</span>
</div>
)
}

export default Sessions