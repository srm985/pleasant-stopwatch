import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const PlateauComponent = (props) => {
    const {
        children,
        className
    } = props;

    const {
        displayName
    } = PlateauComponent;

    const componentClassNames = classNames(
        className,
        displayName
    );

    return (
        <div className={componentClassNames}>
            {children}
        </div>
    );
};

PlateauComponent.displayName = 'PlateauComponent';

PlateauComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

PlateauComponent.defaultProps = {
    children: '',
    className: ''
};

export default PlateauComponent;
