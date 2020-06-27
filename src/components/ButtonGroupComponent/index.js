import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const ButtonGroupComponent = (props) => {
    const {
        children,
        className
    } = props;

    const {
        displayName
    } = ButtonGroupComponent;

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

ButtonGroupComponent.displayName = 'ButtonGroupComponent';

ButtonGroupComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

ButtonGroupComponent.defaultProps = {
    children: '',
    className: ''
};

export default ButtonGroupComponent;
