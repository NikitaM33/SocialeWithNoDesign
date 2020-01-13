import React from 'react';
import preloader from '../../../assets/images/724.svg';

let Preloader = (props) => {
    return(
        <div style={ { width: '65px', height: '65px' } }>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;