import React from 'react'
import { Row, Col } from 'antd'
import { UniversityData } from './UniversityData'
import UniversityCard from './UniversityCard'

interface PropsType { }

const University: React.FC<PropsType> = () => {
    return (
        <div>
            <Row >
                {UniversityData.map((value, key) => {
                    return (
                        <Col key={key} xs={0} sm={12} md={12} lg={6} xl={6}>
                            <UniversityCard value={value} />
                        </Col>
                    );
                })}
                {UniversityData.slice(0, 3).map((value, key) => {
                    return (
                        <Col key={key} xs={24} sm={0} md={0} lg={0} xl={0}>
                            <UniversityCard value={value} />
                        </Col>
                    );
                })}
            </Row>
        </div>
    )
}

export default University