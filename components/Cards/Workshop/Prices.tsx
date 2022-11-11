import React from 'react'

interface PropsType { 
    price:number,
}
const priceCss: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '900'
}
const time: React.CSSProperties = {
    color: 'var(--lightGrey)',
    fontSize:'10px',
    fontWeight: '600'
}
const Prices: React.FC<PropsType> = ({price}) => {
    return (
        <div>
            <p 
            style={
                { float: 'left' }
            }>
                <span className='price' style={priceCss}>${price}</span>
            </p>

        </div>
    )
}

export default Prices