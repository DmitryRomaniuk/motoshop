import React, { PropTypes } from 'react';

const Moto = ({name, srcImg, price}) => {
    return (
        <div className="moto-single">
            <span className="moto-single-name">{name}</span>
            <img className="moto-single-img" src={srcImg} alt="moto img preview"/>
            <span className="moto-single-price">от {price} ₽</span>
        </div>
    );
};

Moto.propTypes = {
    name: PropTypes.string.isRequired,
    srcImg: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default Moto;