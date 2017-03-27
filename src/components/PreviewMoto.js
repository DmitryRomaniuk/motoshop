import React, { PropTypes } from 'react';
import Moto from './Moto';

const PreviewMoto = ({listMoto}) => {
    return (
        <div>
            {listMoto.map((moto, index) => {return <Moto key={index}/>})}
        </div>
    );
};

PreviewMoto.propTypes = {
    listMoto: PropTypes.array.isRequired,
};

export default PreviewMoto;