import React from 'react'

interface PropsType { }
const styles: React.CSSProperties = {
    backgroundColor: 'transparent',
    color: 'var(--lightBlue)',
    fontWeight: '800',
    fontSize: '16px',
    border: 'none',
    float: 'right',
    cursor:'pointer'
}
const Browse: React.FC<PropsType> = () => {
    return (
        <div>
            <button style={styles} className='book_now'>Browse</button>
        </div>
    )
}

export default Browse  