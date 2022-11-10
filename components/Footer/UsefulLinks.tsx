import { Col, Row } from 'antd'
import Link from 'next/link'
import React from 'react'

interface PropsType { }

const UsefulLinks: React.FC<PropsType> = () => {
    return (
        <div className='useful_links' >
            <Row>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h3>Home</h3>
                    <Link href="/">How Platute Works</Link><br />
                    <Link href="/">App Features</Link><br />
                    <Link href="/">Meet Tutors</Link><br />
                    <Link href="/">Downloads</Link><br />
                </Col>
                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h3>Explore</h3>
                    <Link href="/">About Us </Link><br />
                    <Link href="/">Blog</Link><br />
                    <Link href="/">Career</Link><br />
                </Col>
            

                <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h3>Help</h3>
                    <Link href="/">Contact Us</Link>
                </Col>
                <Col xs={12} sm={12} md={12} lg={0} xl={0}>

                </Col>
            </Row>
        </div>
    )
}

export default UsefulLinks