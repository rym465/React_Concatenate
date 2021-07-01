import React, {Component} from 'react';
import { render } from 'react-dom'

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Header World</h1>
            </div>
        )
    }
}


export default Header;