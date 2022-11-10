import React from 'react'

interface PropsType {
    subjects:string
}

const Button: React.FC<PropsType> = ({subjects}) => {
return (
<div>
<button className="Subject_btn" >{subjects}</button>

</div>
)
}

export default Button