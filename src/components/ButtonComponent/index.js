import PropTypes from 'prop-types';
import React from 'react';

import {
    BUTTON_STYLE_TYPES,
    BUTTON_STYLE_TYPE_INLINE,
    BUTTON_STYLE_TYPE_PRIMARY,
    BUTTON_STYLE_TYPE_SECONDARY,
    BUTTON_TYPES,
    BUTTON_TYPE_BUTTON
} from './config';

import classNames from '../../utils/classNames';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        children,
        className,
        handleClick,
        isDisabled,
        isWarning,
        label,
        styleType,
        type
    } = props;

    const {
        displayName
    } = ButtonComponent;

    const componentClassNames = classNames(
        className,
        displayName,
        {
            [`${displayName}--inline-disabled`]: styleType === BUTTON_STYLE_TYPE_INLINE && isDisabled,
            [`${displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE,
            [`${displayName}--primary-disabled`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && isDisabled,
            [`${displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY,
            [`${displayName}--secondary-disabled`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && isDisabled,
            [`${displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY,
            [`${displayName}--warning`]: isWarning
        }
    );

    const buttonLabel = (
        children ? (
            <>{children}</>
        ) : (
            <span className={`${displayName}__label`}>{label}</span>
        )
    );

    return (
        <button
            className={componentClassNames}
            disabled={isDisabled}
            onClick={handleClick}
            type={type}
        >
            {buttonLabel}
        </button>
    );
};

ButtonComponent.displayName = 'ButtonComponent';

ButtonComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    isWarning: PropTypes.bool,
    label: PropTypes.string,
    styleType: PropTypes.oneOf(BUTTON_STYLE_TYPES),
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    children: '',
    className: '',
    handleClick: () => {},
    isDisabled: false,
    isWarning: false,
    label: '',
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

export default ButtonComponent;
