import React, { useState } from 'react'
import { Tabs } from 'antd'
import Image from "next/image";
import CategoryHeading from '../Cards/University/Category';
import SeeAll from '../Button/SeeAll';
import { UsersCarousel } from '../Cards';
import CourseCarousel from '../Cards/Courses';
import WorkshopCarousel from '../Cards/Workshop';
type nav ={
    tab: string,
    key: string,
    content: JSX.Element,
    icon: string,
    iconColored: string
}
interface PropsType {
    navs:Array<nav>
    
}

const Tab: React.FC<PropsType> = (props) => {
    const [tabKey, setTabKey] = useState("0");

    return (
        <div>
            <CategoryHeading />
            <Tabs activeKey={tabKey}
                onChange={key => {
                    setTabKey(key);
                }}
            >
                {props.navs.map((Value, i) => {

                    const black = <Image src={Value.icon} height={12} width={12} alt='icon' className="icon" />;
                    const color = <Image src={Value.iconColored} height={12} width={12} alt='icon' className="icon" />;

                    // console.log(Value);
                    return (
                        <Tabs.TabPane
                            tab={
                                <span>
                                    {tabKey === Value.key ? color : black}
                                    {/* <Value.icon /> */}
                                    {Value.tab}
                                </span>
                            }
                            key={i}
                        >
                            {Value.content}
                        </Tabs.TabPane>
                    );
                })}
            </Tabs>
            <SeeAll />
            <div>
            <UsersCarousel  />
            <CourseCarousel />
            <WorkshopCarousel />
            </div>
        </div>
    )
}

export default Tab