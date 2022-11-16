import { Button, Modal, Select, Table } from 'antd';
import React, { useState } from 'react';


const Popup: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const data = [
        {
            key: '1',
            student_name: 'John Brown',
            email: "example@email.com",
            attendance: <SelectOp />,
        },
        {
            key: '2',
            student_name: 'Jim Green',
            email: "example@email.com",
            attendance: <SelectOp />,
        },
        {
            key: '3',
            student_name: 'Joe Black',
            email: "example@email.com",
            attendance: <SelectOp />,
        },
    ];
    const columns = [
        {
            title: 'Student Name',
            dataIndex: 'student_name',
            key: 'student name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Attendance',
            dataIndex: 'attendance',
            key: 'attendance',
        },
    ];


    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Regular > Integrated English Course > Junior" open={isModalOpen} onCancel={handleCancel}>

                <div>
                    <div className='header'>
                        <div>
                            <h3>Date</h3>
                            <h4>16/11/2022</h4>
                        </div>
                        <div>
                            <h3>Time</h3>
                            <h4>5:08 pm</h4>
                        </div>
                        <div>
                            <h3>Price</h3>
                            <h4>$95</h4>
                        </div>
                    </div>
                    <h3>Zoom Link</h3>
                    <h4>https:us.zoom.com/caAcadw8XcD7</h4>
                </div>
                <Table columns={columns} dataSource={data} pagination={false} />
                <div className='btn_div'>
                    <button>Start Lesson</button>
                </div>
            </Modal>
        </>
    );
};

export default Popup;
export const SelectOp = () => {
    const { Option } = Select
    return (
        <Select defaultValue='No Attendance'>
            <Option>Present</Option>
            <Option>Late</Option>
            <Option>Absent</Option>
            <Option>Leave</Option>
            <Option>Other</Option>
        </Select>
    )
}