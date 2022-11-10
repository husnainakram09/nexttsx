import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { userData } from './UserData'
import Profile from './Profile'
import { Col, Divider } from 'antd'
import Link from 'next/link';


interface PropsType {

}

const UsersCarousel: React.FC<PropsType> = () => {
    const responsive = {
        0: { items: 1.4 },
        568: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1024: { items: 4.7 },
    };
    
    return (
        <div className='carousel_div'>
            <div style={{marginLeft:'10px'}}>

            <span style={{ backgroundColor:'var(--orange)' ,border:'2px solid var(--orange)', padding:'0', marginRight:'5px'}}></span>
            <h3 style={{display:'inline', fontWeight:'700'}}> the most popular Tutors</h3>&nbsp;&nbsp;
            <span className='carousel-header-line' style={{display:'inline-block',width:'75vw',borderBottom:'1px solid black', lineHeight:'0'}}>&nbsp;</span>&nbsp;&nbsp;
            
            <Link href='/' style={{textAlign:'right', color:'var(--orange)'}} >see more</Link>
            </div>
            <AliceCarousel mouseTracking={true} responsive={responsive} autoHeight={true}
                keyboardNavigation={true}
            >
                {userData.map((val, ind) => {
                    return (
                        <Col className="user_prof">
                            <Profile userInfo={val} key={ind} />
                        </Col>
                    )
                })}
            </AliceCarousel>

        </div>
    )
}

export default UsersCarousel