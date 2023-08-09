import React from 'react';
import {FlexWrapper} from '../FlexWrapper';
import {S} from "./Slider_Styles";

export const Slider: React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, eros eget elementum
                        accumsan, libero orci sollicitudin magna, et lobortis dui nulla mollis nisl</S.Text>
                    <S.Name>@Ivan Ivanov</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </S.Pagination>
        </S.Slider>
    );
};

