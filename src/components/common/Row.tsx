import React, { ReactNode } from 'react';
import styled from 'styled-components';

/**
 * @description 가로 contents 영역을 제한하기 위한 component 
 */

const Row = ({children}:{children: ReactNode}) => {
    return (
        <Wrap>
            {children}
        </Wrap>
    );
};

export default Row;


const Wrap = styled.div`
    max-width: 1000px; 
    margin: 0 auto;
    padding-top: 50px;
    @media screen and (max-width: 1200px){
        max-width: 100%; 
        padding: 50px 20px 0 20px;
    }
`

