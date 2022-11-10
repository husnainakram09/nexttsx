import React from 'react'

interface PropsType { }

const CategoryHeading: React.FC<PropsType> = () => {
    return (
        <div>
            <h2 className="categories_heading">We have 3 Categories</h2>
        </div>
    )
}

export default CategoryHeading