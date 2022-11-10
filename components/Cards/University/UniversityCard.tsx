
import React from 'react'

import Body from './Body'
import Header from './Header'
import Button from './Button'
import { Row, Col } from 'antd'


interface PropsType {
    value: {
        logo: string,
        name: string,
        description: string,
        subjects: string,
        img: string
    }
}

const UniversityCard: React.FC<PropsType> = ({ value }: PropsType) => {
    const { logo, name, description, subjects, img } = value

    return (
        <div className="Main_div">
            <Row>
                <Col span={24}>
                    <Header img={img} logo={logo} />
                    <Body name={name} description={description} />
                    <Button subjects={subjects} />
                </Col>
            </Row>
        </div>
    )
}

export default UniversityCard