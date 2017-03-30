import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import * as actionCreators from '../action_creators';
import {connect} from 'react-redux';

const NavigatorBar = () => {
    return (<Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="/" className="header-logo__brand" rel="honda logo">Honda</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <LinkContainer to="/super-sport/">
                <NavItem eventKey={1}>Супер Спорт</NavItem>
            </LinkContainer>
            <LinkContainer to="/sport-touring/">
            <NavItem eventKey={2} >Спорт Туризм</NavItem>
            </LinkContainer>
            <LinkContainer to="/touring/">
            <NavItem eventKey={3} >Туризм</NavItem>
            </LinkContainer>
            <LinkContainer to="/naked/">
            <NavItem eventKey={4} >Нейкиды</NavItem>
            </LinkContainer>
            <LinkContainer to="/enduro/">
            <NavItem eventKey={5} >Эндуро</NavItem>
            </LinkContainer>
            <LinkContainer to="/crosser/">
            <NavItem eventKey={6} >Кроссовые</NavItem>
            </LinkContainer>
            <LinkContainer to="/quadracycle/">
            <NavItem eventKey={7} >Квадроциклы</NavItem>
            </LinkContainer>
            <LinkContainer to="/login/">
            <NavItem eventKey={8} >
            <span className="header-login__svg" rel="login"/>
            <span>Log in</span>
            </NavItem>
            </LinkContainer>
            {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
            {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
            {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
            {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
            {/*<MenuItem divider />*/}
            {/*<MenuItem eventKey={3.4}>Separated link</MenuItem>*/}
            {/*</NavDropdown>*/}
        </Nav>
    </Navbar>)
};

// export const NavigatorBar = ({isOpen, toggleNavBar}) => {
//     return (
//         <Navbar color="faded" light toggleable>
//             <NavbarToggler right onClick={toggleNavBar}/>
//                 <NavLink href="/" className="header-logo__brand" rel="honda logo">Honda</NavLink>
//             <Collapse isOpen={isOpen} navbar>
//                 <Nav className="ml-auto" navbar>
//                     <NavItem>
//                         <NavLink href="/super-sport/">Супер Спорт</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/sport-touring/">Спорт Туризм</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/touring/">Туризм</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/naked/">Нейкиды</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/enduro/">Эндуро</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/crosser/">Кроссовые</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/quadracycle/">Квадроциклы</NavLink>
//                     </NavItem>
//                     <NavItem>
//                         <NavLink href="/login/">
//                             <span className="header-login__svg" rel="login"/>
//                             <span>Log in</span>
//                         </NavLink>
//                     </NavItem>
//                 </Nav>
//             </Collapse>
//         </Navbar>
//     );
// };

function mapStateToProps(state) {
    return {
        isOpen: state.get('isOpen')
    };
}

export const NavigatorBarContainer = connect(
    mapStateToProps,
    actionCreators
)(NavigatorBar);