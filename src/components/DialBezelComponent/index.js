import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const DialBezelComponent = (props) => {
    const {
        children,
        className
    } = props;

    const {
        displayName
    } = DialBezelComponent;

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

DialBezelComponent.displayName = 'DialBezelComponent';

DialBezelComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

DialBezelComponent.defaultProps = {
    children: '',
    className: ''
};

export default DialBezelComponent;
