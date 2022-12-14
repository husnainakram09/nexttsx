import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { userData } from './UserData'
import Profile from './Profile'
import { Col, Divider } from 'antd'
import Link from 'next/link';
import TutorHeader from './TutorHeader';


interface PropsType {

}

const UsersCarousel: React.FC<PropsType> = () => {
    const responsive = {
        // 0: { items: 1 },
        // 380:{items:1.1},
        // 480:{items:1.4},
        // 568: { items: 2 },
        // 768: { items: 3 },
        // 992: { items: 4 },
        // 1024: { items: 4.7 },
        0: { items: 1.3 },
        568: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1024: { items: 4.7 },
    };
    
    return (
        <div className='carousel_div'>
            <TutorHeader/>
            <AliceCarousel mouseTracking={true}
             responsive={responsive} 
             autoHeight={true}
                keyboardNavigation={true}
            >
                {userData.map((val, ind) => {
                    return (
                        <Col className="user_prof" 
                        // xs={24} sm={12} 
                        key={ind}>
                            <Profile userInfo={val}  />
                        </Col>
                    )
                })}
            </AliceCarousel>

        </div>
    )
}

export default UsersCarousel