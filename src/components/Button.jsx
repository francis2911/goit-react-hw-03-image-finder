import React from 'react';

import { ButtonStyle } from './Button.styled';

function Button({ onClick, hasImages }) {
    return hasImages ? (
        <ButtonStyle onClick={onClick} className="load-more-button">
            Load more
        </ButtonStyle>
    ) : null;
}

export default Button;