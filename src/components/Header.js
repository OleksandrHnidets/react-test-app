import React from 'react'
import PropTypes from 'prop-types'
import AddButton from './AddButton'


const Header = (props) => {

    const onClickEvent= () =>{
        console.log('Click')
    }
    
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <AddButton onClick={onClickEvent} text='Add task' color='green'/>
        </header>
    )
}

Header.defaultProps={
    title:'Default Header',
}

Header.propTypes={
    title:PropTypes.string,
}

const headerStyling={
    color:'red',
    backgroundColor:'yellow',
}
export default Header
