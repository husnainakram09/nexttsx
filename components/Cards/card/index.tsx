import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CourseData } from "./CourseData";
import Profile from "./Profile";
import { Col, Divider } from "antd";
import Link from "next/link";
import CourseHeader from "./CourseHeader";

interface PropsType {}

const Card: React.FC<PropsType> = () => {
  const responsiveness = {
    0: { items: 1.3 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 4 },
    1024: { items: 4.7 },
    
  };

  return (
    <div className="carousel_div">
      
<CourseHeader />
      <AliceCarousel
        mouseTracking={true}
        autoHeight={true}
        keyboardNavigation={true}
        responsive={responsiveness}
      >
        {CourseData.map((val, ind) => {
          return (
            <Col
              className="course_div user_prof"
              // xs={20} sm={12}
              key={ind}
            >
              <Profile CourseInfo={val} />
            </Col>
          );
        })}
      </AliceCarousel>
    </div>
  );
};

export default Card;
