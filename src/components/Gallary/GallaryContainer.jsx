import React from 'react';
import style from './Gallary.module.css';
import withBorder from './withBorder';

class GallaryContainer extends React.Component {
    render() {
        let WithBorder = withBorder();
        return(
            <div>
                Gallary
            </div>
        )
    }
}

export default GallaryContainer;