import { wrap } from 'module'
import React from 'react'

// type skillSet = string
interface PropsType {
    skill: Array<string>
}

const styles: React.CSSProperties = {
    color: 'var(--lightBlue)',
    fontSize:'10px',
    fontWeight:'600',
    border: '2px solid var(--lightBlue)',
    padding: '5px 10px',
    borderRadius: '25px',
    // marginRight: '10px',
}

const Skills: React.FC<PropsType> = (props) => {
    return (
        <div className='skills' style={{ margin: '0 auto', marginTop:'20px',marginBottom:'10px', display:'flex',flexWrap:'wrap',flexDirection:'row', height: 'auto', maxWidth:'200px' }}>
            {
                props.skill.map((val, ind) => {
                    return (
                        <div >
                            <p style={styles} key={ind}>
                                {val}
                            </p>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Skills