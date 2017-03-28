import React, { PropTypes } from 'react';
import Moto from './Moto';

const PreviewMoto = ({listMoto}) => {
    return (
        <div className="preview-moto">
            {listMoto.map((props, index) => {return <Moto key={index} name={props.name}
                                                          srcImg={props.srcImg} price={props.price}/>})}
        </div>
    );
};

PreviewMoto.propTypes = {
    listMoto: PropTypes.array.isRequired,
};

export default PreviewMoto;