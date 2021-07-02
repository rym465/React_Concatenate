import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'

class Navbar extends Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                <img className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/creative.png`} 
     alt="logo" width="150px" Height="150px"/>
                    <i className="fab fa-react"></i>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) =>{
                        return(
                            <li>
                                <a className={item.cName} href={item.url}>{item.title}
                                </a>
                            </li>                            
                        )
                    })
                    }


                </ul>
            </nav>
        )
    }
}

export default Navbar;
