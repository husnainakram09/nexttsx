import React from 'react'
import Image from "next/image";

interface PropsType {
    logo: string,
    img: string
}

const Header: React.FC<PropsType> = ({ logo, img }) => {
    return (
        <div className="Card_Header" style={{ backgroundImage: `url(${img})` }} >
            <Image src={logo} alt="Unsw" height={50} width={50} className="logo" />
        </div>
    )
}

export default Header