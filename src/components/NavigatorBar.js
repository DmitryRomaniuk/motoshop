import React from 'react';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

export const NavigatorBar = ({isOpen, toggleNavBar}) => {
    return (
        <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={toggleNavBar}/>
                <NavLink href="/" className="header-logo__brand" rel="honda logo">Honda</NavLink>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/super-sport/">Супер Спорт</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/sport-touring/">Спорт Туризм</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/touring/">Туризм</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/naked/">Нейкиды</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/enduro/">Эндуро</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/crosser/">Кроссовые</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/quadracycle/">Квадроциклы</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login/">
                            <span className="header-login__svg" rel="login"/>
                            <span>Log in</span>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
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