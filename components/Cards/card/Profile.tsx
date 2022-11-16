import Image from "next/image";
import React from "react";
import Rating from "./Rating";
import CardsBtn from "../../Button/CardsBtn";
import Price from "../Pricing/Price";

interface PropsType {
  CourseInfo: {
    name: string;
    picture: string;
    description: string;
    price: number;
    ratings: number;
    reviews: number;
  };
}

const Profile: React.FC<PropsType> = ({ CourseInfo }) => {
  const { name, picture, description, price, ratings, reviews } = CourseInfo;
  return (
    <div style={{ textAlign: "center", position: "relative" }}>
      <div
        style={{
          display: "flex",
          position: "absolute",
          backgroundColor: "white",
          borderRadius: "5px",
          padding: "1px 3px",
          margin: "5px",
        }}
      >
        <Rating rating={ratings} review={reviews} />
      </div>
      <div>
        <Image
          src={picture}
          alt="pp"
          width={200}
          height={120}
          style={{
            width: "100%",
            height: "140px",
            backgroundColor: "brown",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <span
          className="course_name"
          style={{ margin: "0", fontSize: "20px", fontWeight: "600" }}
        >
          {name}
        </span>
      </div>
      <div>
        <p style={{ lineHeight: "20px" }} className="course_description">
          {description.substring(0, 70)}
        </p>
      </div>
      <div>
        {/* <Prices price={price} /> */}
        <Price prices={price}/>
        <CardsBtn name="Browse" />
      </div>
    </div>
  );
};

export default Profile;
