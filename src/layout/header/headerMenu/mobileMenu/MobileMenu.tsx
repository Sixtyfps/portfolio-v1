import React from 'react';
import {Logo} from "../../../../components/logo/Logo";
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={true}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={true}>
                <div>
                    <Logo/>
                </div>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

