import React from 'react'

const AddButton = ({text, color, onClick}) => {
    return <button className='btn' onClick={onClick} style={{background:color}}>{text}</button>
}

AddButton.defaultProps={
    color:'black',
    text:'defText'
}

export default AddButton
