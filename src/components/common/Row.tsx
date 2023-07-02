import React, { ReactNode } from 'react';
import styled from 'styled-components';

const Row = ({children}:{children: ReactNode}) => {
    return (
        <Wrap>
            {children}
        </Wrap>
    );
};

export default Row;


const Wrap = styled.div`
    max-width: 1000px; margin: 0 auto;
    @media screen and (max-width: 1200px){
        max-width: 100%; padding: 0 20px;
    }
`
