import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

export const NavigatorBar =({isOpen, toggleNavBar}) => {
    return (
        <div>
            <Navbar color="faded" light toggleable>
                <NavbarToggler right onClick={toggleNavBar}/>
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isOpen: state.get('isOpen')
    };
}

export const NavigatorBarContainer = connect(
    mapStateToProps,
    actionCreators
)(NavigatorBar);