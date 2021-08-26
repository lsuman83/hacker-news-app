import React from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends React.Component {

    render(){
        return(
            <div>
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
            </div>
        )
    }

}

export default Navbar;