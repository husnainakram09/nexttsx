import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { workshopData } from './WorkshopData'
import Profile from './Profile'
import { Col, Divider } from 'antd'
import Link from 'next/link';
import WorkshopHeader from './WorkshopHeader';


interface PropsType {

}

const WorkshopCarousel: React.FC<PropsType> = () => {
    const responsive = {
        0: { items: 1.3 },
        // 380:{items:1.1},
        // 480:{items:1.4},
        568: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1024: { items: 4.7 },
    };
    
    return (
        <div className='carousel_div'>
            <WorkshopHeader/>
            <AliceCarousel mouseTracking={true}  autoHeight={true}
                keyboardNavigation={true}
                responsive={responsive}
            >
                {workshopData.map((val, ind) => {
                    return (
                        <Col className=" user_prof" 
                        // span={24}
                        key={ind}
                        >
                            <Profile WorkshopInfo={val}  />
                        </Col>
                    )
                })}
            </AliceCarousel>

        </div>
    )
}

export default WorkshopCarousel