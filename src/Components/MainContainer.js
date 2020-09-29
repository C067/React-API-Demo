import React, {Component} from 'react';

//NavBar
import NavBar from './NavBar';
//SideBar
import SideBar from './SideBar';

class MainContainer extends Component {
    render() {
        return (
            <div>
                {/* NavBar */}
                <NavBar title="WEB422 - Project Portal"/>
                
                <div className="container-fluid">
                    <div className="row">
                        {/* SideBar */}
                        <SideBar highlight={this.props.sidebar} />
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;