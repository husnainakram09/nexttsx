import Image from 'next/image'
import React from 'react'
import LastSeen from './LastSeen'
import Price from '../Pricing/Price'
import Rating from './Rating'
import Sessions from './Sessions'
import Skills from './Skills'
import BlueTick from './../../../public/svg/check.png'
import CardsBtn from '../../Button/CardsBtn'

// type skillSet = [
//     string
// ]

interface PropsType {

    userInfo: {
        name: string,
        picture: string,
        sessions: number,
        ratings: number,
        reviews: number,
        price: number,
        time: number | string
        skills:Array<string>
    }

}



const Profile: React.FC<PropsType> = ({ userInfo }) => {
    const { name, picture, sessions, ratings, reviews,price,time,skills } = userInfo;
    return (
        <div style={{ textAlign: 'center' }}>
            <div 
            className='profile_picture' 
            style={{width:'max-content',position:'relative'}}
            >
                <Image src={picture} alt='pp' width={100} height={100} style={{borderRadius:'50%'}}/>
                <LastSeen />
            </div>
            <div>
                <Image src={BlueTick} alt='blue tick' width={15} height={15} style={{margin:'0 5px 10px 0'}}/>
                <span className='user_name' style={{ margin: '0',fontSize:'20px', fontWeight:'600' }}>{name}</span>
            </div>
            <div style={{ display: 'flex', maxWidth: '170px' }}>

                <Sessions session={sessions} />
                <Rating rating={ratings} review={reviews}/>
            </div>
            <div>
                <Skills skill={skills} />
            </div>
            <div>
                <Price prices={price} times={time}/>
                {/* <BookNow/> */}
                <CardsBtn name='Book Now'/>
            </div>

        </div>
    )
}

export default Profile