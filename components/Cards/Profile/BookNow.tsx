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
const BookNow: React.FC<PropsType> = () => {
    return (
        <div>
            <button style={styles} className='book_now'>Book now</button>
        </div>
    )
}

export default BookNow  