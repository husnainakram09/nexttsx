import { Col, Row } from 'antd'
import React from 'react'
import CopyRight from './CopyRight'
import FooterLogo from './FooterLogo'
import SocialIcons from './SocialIcons'
import UsefulLinks from './UsefulLinks'

interface PropsType { }

const footer: React.CSSProperties = {
    backgroundColor: '#28323C',
    padding:'40px 100px',
}
const Footer: React.FC<PropsType> = () => {
    return (
        <div>

            <div style={footer} className="footer">
                <Row>
                    <Col xs={0} sm={0} md={24} lg={5} xl={5}>
                        <FooterLogo />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={14} xl={14}>
                        <UsefulLinks />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={5} xl={5}>
                        <SocialIcons />
                    </Col>
                </Row>
            </div>
            <CopyRight />
        </div>
    )
}

export default Footer