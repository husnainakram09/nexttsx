import { Col, Row } from 'antd'
import React from 'react'
import LastSeen from './LastSeen'
import Profile from './Profile'
import { userData } from './UserData'


interface PropsType { }

const User: React.FC<PropsType> = () => {
    return (
        <div className='profile' >
            <Row>

                {userData.map((val, ind) => {
                    console.log(userData)
                    return (
                        <Col xs={20} sm={20} md={12} lg={6} xl={6} className="user_prof">
                            <Profile userInfo={val} key={ind} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default User