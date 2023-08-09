import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

const items = ["home", "skills", "works", "about", "contact"]

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 790;

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);


    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <S.LogoWrapper>
                        <Logo/>
                    </S.LogoWrapper>

                    {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}


                </FlexWrapper>
            </Container>
        </S.Header>
    );
};


