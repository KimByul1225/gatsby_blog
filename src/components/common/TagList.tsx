import React from 'react';
import { styled } from 'styled-components';

export default function TagList({item}: {item: readonly (string | null)[] | null | undefined}) {
    return (
        <TagWrap>
            {
                item && item.map((el, index) => {
                    return(
                        <span key={index}>
                            # {el}
                        </span>
                    )
                })
            }
        </TagWrap>
    )
}

const TagWrap = styled.div`
    span{
        display: inline-block;
        margin: 0 10px 10px 0;
        padding: 5px 15px;
        background-color: #000;
        color: #fff;
        border-radius: 20px;
    }
`