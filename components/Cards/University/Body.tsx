import React from 'react'

interface PropsType {
    name: string,
    description: string
}


const Body: React.FC<PropsType> = ({name, description}) => {
    return (
        <div>
            <header>
                <h3>{name}</h3>
            </header>
            <div>
                <p>{description.substring(0,62)}</p>
            </div>
        </div>
    )
}

export default Body