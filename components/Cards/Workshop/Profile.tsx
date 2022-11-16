import Image from 'next/image'
import React from 'react'
import Price from '../Pricing/Price'
import { CalendarOutlined, ClockCircleOutlined, PushpinOutlined } from '@ant-design/icons'
import CardsBtn from '../../Button/CardsBtn'

// type skillSet = [
//     string
// ]

interface PropsType {

    WorkshopInfo: {
        name: string,
        picture: string,
        location: string,
        dateTime: string,
        hours: string,
        price:number,
        views: number,
    }

}



const Profile: React.FC<PropsType> = ({ WorkshopInfo }) => {
    const { name,picture,location,dateTime,hours,price,views } = WorkshopInfo;
    return (
        <div style={{ textAlign: 'left',position:'relative' }}>
            {/* <div style={{ display: 'flex', position:'absolute', backgroundColor:'white', borderRadius:'5px', padding:'1px 3px', margin:'5px'  }}>

                
                <Rating rating={''} review={reviews}/>
            </div> */}
            <div>
                <Image src={picture} alt='pp' width={200} height={120} style={{width:'100%', height:'140px', backgroundColor:'brown', borderRadius:'5px'}}/>
                
            </div>
            <div style={{marginTop:'10px'}}>
                <span className='course_name' style={{ margin: '0',fontSize:'20px', fontWeight:'600' }}>{name}</span>
            </div>
            <div>
                <p style={{margin:'0'}} className='workshop_address'><PushpinOutlined style={{margin:'0'}} /> {location.substring(0,28)}...</p>
            </div>
            <div>
                <p className='workshop_calender'><CalendarOutlined style={{margin:'0'}}/> {dateTime} <ClockCircleOutlined style={{margin:'0'}}/> {hours}</p>
            </div>
            <div>
                <Price prices={price} />
                {/* <Details handleClick={()=>alert('hello')}/> */}
                <CardsBtn name='Details' />
            </div>

        </div>
    )
}

export default Profile