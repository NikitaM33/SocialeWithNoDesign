import React from 'react';
// import style from './Gallary.module.css';

const style = {
    border: "2px solid red"
}

// ЭТО НОС

const withBorder = (WrappedComponent) => {
    class _WithBorder extends React.Component {
        render() {
            return(
                <div style={style}>
                    <WrappedComponent {...this.props} />
                </div>
            )
        }
    }

    _WithBorder.displayName = "WithBorder";
    return _WithBorder;
}

export default withBorder;