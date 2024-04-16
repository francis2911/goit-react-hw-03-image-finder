import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';

import styled from 'styled-components';

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

function LoaderComponent() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <LoaderContainer style={{ display: loading ? 'flex' : 'none' }}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </LoaderContainer>
    );
}

export default LoaderComponent;