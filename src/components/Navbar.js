import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {
    render(){
        return(
            <nav className='bg-gray-400'>
                <NavLink
                    className='p-4 inline-block'
                    exact
                    to='/search'
                    >
                    Search News
                </NavLink>
                <NavLink
                    className='p-4 inline-block'
                    exact
                    to='/history'
                    >
                    History
                </NavLink>
            </nav>
        )
    }

}

export default Navbar;