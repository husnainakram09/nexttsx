
import React from 'react'

interface PropsType { 
    handleClick?:React.MouseEventHandler<HTMLButtonElement>,
    name:string
}
const styles: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'var(--lightBlue)',
    fontWeight: '800',
    fontSize: '16px',
    border: 'none',
    float: 'right',
    cursor:'pointer'
}
const CardsBtn: React.FC<PropsType> = ({handleClick, name}) => {
    return (
        <div>
            <button style={styles} className='cards_btn' onClick={handleClick}>{name}</button>
        </div>
    )
}

export default CardsBtn  