import React,{useState} from 'react'

interface PropsType {
    prices:number,
    times?:number|string
 }
const price: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '900'
}
const time: React.CSSProperties = {
    color: 'var(--lightGrey)',
    fontSize:'10px',
    fontWeight: '600'
}
const hide: React.CSSProperties = {
    display:'none'
}
const Price: React.FC<PropsType> = ({prices, times}) => {

    
    
    return (
        <div>
            <p 
            style={
                { float: 'left' }
            }>
                <span className='price' style={price}>${prices}</span>
                <span className='time' style={times? time:hide}> {`/ ${times}`}</span>
            </p>

        </div>
    )
}

export default Price