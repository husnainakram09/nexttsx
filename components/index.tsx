import React from 'react'
import SeeAll from './Button/SeeAll'
import Tab from './Tabs/Tab'
import { NavTab } from './Tabs/TabData'

interface PropsType { }

const Universities: React.FC<PropsType> = () => {
    return (
        <div className='Main'>
            <Tab navs={NavTab} />
        </div>
    )
}

export default Universities