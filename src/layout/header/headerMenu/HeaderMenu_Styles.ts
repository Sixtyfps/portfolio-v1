import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";


//Menu Common Styles

const MenuItem = styled.li`
  position: relative;
`

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 12px;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};
  transition: ${theme.animations.transition};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  font-size: 24px;
  font-weight: 500;
  color: transparent;
  &:hover {
    cursor: pointer;
  }
  &::before {
    content: "#";
    color: ${theme.colors.accent};
  }
  // &::after {
  //   content: "";
  //   display: inline-block;
  //   height: 1px;
  //   background-color: ${theme.colors.accent};
  //   position: absolute;
  //   top:50%;
  //   left: 15px;
  //   right: -5px;
  //   z-index: 1;
  //   transform: scale(0);
  // }
  &:hover, &.active {
    //&::after{
    //  transform: scale(1);
    //}

    &::before{
      color: ${theme.colors.font};
    }
    
    ${Mask} {
      transform: skewX(15deg);
      color: ${theme.colors.accent};

      & + ${Mask} {
        transform: skewX(15deg);
      }
    }
  }
`

//Mobile Menu

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  div {
    margin: 60px 0;
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: ${theme.colors.primaryBg};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);
  transition: ${theme.animations.burgerTransition};

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
  `}
  
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;

    ${MenuItem} {
      ${NavLink} {
        font-size: 36px;

        &::before {
          position: absolute;
          left: -8px;
        }
        
      }
      
    }
    
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 99999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.accentSecondary};
    position: absolute;
    left: 40px;
    bottom: 65px;
    transition: ${theme.animations.burgerTransition};
    
    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.accentSecondary};
      position: absolute;
      transform: translateY(-10px);
      transition: ${theme.animations.burgerTransition};
      
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.accentSecondary};
      position: absolute;
      transform: translateY(10px);
      transition: ${theme.animations.burgerTransition};
      
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
    
  }
`

//Desktop Menu

const DesktopMenu = styled.nav`
    ul {
      justify-content: center;
      display: flex;
      gap: 50px;
    }
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}