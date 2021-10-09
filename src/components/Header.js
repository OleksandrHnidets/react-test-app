import React from 'react'
import PropTypes from 'prop-types'
import AddButton from './AddButton'


const Header = (props) => {

    const onClickEvent= () =>{
        console.log('Click')
    }
    
    return <h1 className='textheader'>{props.title}</h1> 
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
