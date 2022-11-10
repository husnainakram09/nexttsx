import React from 'react'

interface PropsType { }
const price: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '900'
}
const time: React.CSSProperties = {
    color: 'var(--lightGrey)',
    fontSize:'10px',
    fontWeight: '600'
}
const Price: React.FC<PropsType> = () => {
    return (
        <div>
            <p 
            style={
                { float: 'left' }
            }>
                <span className='price' style={price}>$95</span>
                <span className='time' style={time}> / 30 min</span>
            </p>

        </div>
    )
}

export default Price