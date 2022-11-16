import { StarFilled } from '@ant-design/icons'
import React from 'react'

interface PropsType {
    rating:number,
    review:number
 }

const Rating: React.FC<PropsType> = ({rating,review}) => {
    return (
        <div>
            <div className='rating_div'>
                <StarFilled style={{backgroundColor:'transparent'}}/>
                <span style={{fontSize:'14px', color:'var(--orange)', marginLeft:'-7px'}}>{rating}</span>
                <span style={{fontSize:'10px', marginLeft:'3px', }}>&#40;{review}&#41;	</span>
            </div>
        </div>
    )
}

export default Rating