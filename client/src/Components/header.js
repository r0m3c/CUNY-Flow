import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/fontawesome-free';
import {Link} from "react-router-dom"
import cunyflow from "../Images/cunyflow.png"

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #CE4A4A; */
    background-color: #92bfdf;
    color: black;
`

const StyledNavTitle = styled.div`
    font-size: 1.5rem;
    margin: .5rem;
    padding-left: 5%;
`

const StyledNavLogo = styled.img`
    float: left; width: 95px;
    height: 100px;
`

const StyledNavInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;
    width: 500px;
    border-radius: 1.9rem;
    background: white;
    border-color: black;
    border-width: thick;
    box-shadow: 0.5rem 0.5rem 0rem rgb(63, 63, 63);
`

const StyledNavInputInput = styled.input`
    margin: 0 0.5rem 0 0.5rem;
    width: 100%;
    border: none;
    outline: none;
    color: black;
`

const StyledNavBarLinks = styled.div`
    padding-right: 5%; 
    padding-left: 5%;
`

const StyledNavBarLinksUL = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
`

const StyledNavBarLinksLI = styled.li`
    list-style: none;
`

const StyledNavBarLinksA = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
    background-color:  #1B3B89; 
    border-radius: 5rem; 
    color: white;
`

const StyledNavBarLinks2 = styled.a`
    text-decoration: none;
    color: black;
    padding: 1rem;
    display: block;
    background-color:  #1B3B89; 
    border-radius: 5rem; 
    color: white;
`

const StyledHR = styled.hr`
    border-bottom: 1px  black;
    /* box-shadow: 0 20px 20px -20px #333; */
    box-shadow: 0 2px 2px #333;
    background-color: #09062C; 
    height: 15px;
`

const StyledLogoLink = styled(Link)``

function Header() {
    return (
        <header>
            <StyledNav>
                <StyledNavTitle className="brand-title">
                    <StyledLogoLink to={"/"}>
                        <StyledNavLogo src={cunyflow} alt="" className="logo-image" />
                    </StyledLogoLink>
                </StyledNavTitle>

                <form>
                    <StyledNavInput className="input-wrapper">
                        {/* <FontAwesomeIcon icon="fa-magnifying-glass" /> */}
                        <StyledNavInputInput type="text" placeholder="Search here" />
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                    </StyledNavInput>
                </form>

                <StyledNavBarLinks className="navbar-links">
                    <StyledNavBarLinksUL>
                        <StyledNavBarLinksLI><StyledNavBarLinksA to={"/"} className="navbar-links-a" href="df">Home</StyledNavBarLinksA></StyledNavBarLinksLI>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <StyledNavBarLinksLI><StyledNavBarLinks2 className="navbar-links-a" href="sdf">Sign out</StyledNavBarLinks2></StyledNavBarLinksLI>
                    </StyledNavBarLinksUL>
                </StyledNavBarLinks>
            </StyledNav>

            <StyledHR className="rounded" />
      </header>
    );
}

export default Header;