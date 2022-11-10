import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import User from '../Cards/Profile/User';
import { userData } from './../Cards/Profile/UserData'
import Profile from './../Cards/Profile/Profile'
import { Col } from 'antd'


interface PropsType {

}

const Carousel: React.FC<PropsType> = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1024: { items: 4.7 },
    };
    const items = [

    ];
    return (
        <div style={{ margin: '0 60px' }}>
            <AliceCarousel mouseTracking={true} responsive={responsive} autoHeight={true}
                keyboardNavigation={true}
            // disableButtonsControls={true}
            >
                {userData.map((val, ind) => {
                    console.log(userData)
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

export default Carousel