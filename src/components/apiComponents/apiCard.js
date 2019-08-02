import React from 'react';

const ApiCard = props => {
    const image = props.image;
    return (
        <img src={image} alt="You got here">
            {/* {stuff goes here} */}
        </img>
    );
}

export default ApiCard;