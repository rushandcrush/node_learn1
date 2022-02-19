import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
    console.log(props)
    let renderContent = () => {
        switch(props.auth) {
            case null:
                return 'loading'
            case false: 
                return 'im logout'
            default: 
                return 'im login'
        }
    }
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="row">
                    <div className="col s12">
                        <a className="left brand-logo">Oauth</a>
                        <ul className="right">
                            <li>
                                <a>
                                    {renderContent()}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function mapStateProps({ auth }) {
    return { auth }
}

export default connect(mapStateProps) (Header);