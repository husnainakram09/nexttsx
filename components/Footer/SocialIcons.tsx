import { FacebookFilled, GoogleSquareFilled, InstagramFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons'
import React from 'react'
import { Col, Row } from 'antd'

interface PropsType { }

const SocialIcons: React.FC<PropsType> = () => {
    return (
        <div style={{ color: 'white' }}>
            <Col span={24}>

                <h3 style={{ color: 'white' }}>Social Media</h3>
                <div className='social_icons'>


                    <LinkedinFilled />
                    <InstagramFilled />
                    <FacebookFilled />
                    <TwitterSquareFilled />
                    <GoogleSquareFilled />

                </div>
            </Col>
        </div>
    )
}

export default SocialIcons