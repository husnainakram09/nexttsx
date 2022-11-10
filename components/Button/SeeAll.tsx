import React from 'react'

interface PropsType { }


const innerDiv: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    // bottom: 0,
    // left: 0,
    textAlign: 'center',
    backgroundColor: 'rgb(255,255,255,0.95)',
    fontWeight: '600',
    boxShadow: '0px 0px 300px 200px white',
    // marginBottom: '-10% !important'
}

const span: React.CSSProperties = {
    color: '#F36D6A'
}
const button: React.CSSProperties = {
    width: '100px',
    height: '30px',
    backgroundColor: '#F36D6A',
    color: 'white',
    border: 'none',
    marginBottom: '30px',
    borderRadius: '5px',
    cursor: 'pointer',

}

const SeeAll: React.FC<PropsType> = () => {
    return (
        <div  >
            <div style={innerDiv} className="seeAllButton" >
                <p>There are more than <span style={span}>60/000</span> subjects <br /> for you to browse</p>
                <button style={button}>See All</button>
            </div>
        </div>
    )
}

export default SeeAll