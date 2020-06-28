import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const PitComponent = (props) => {
    const {
        children,
        className,
        shouldFillRemainingHeight
    } = props;

    const {
        displayName
    } = PitComponent;

    const componentClassNames = classNames(
        className,
        displayName,
        {
            [`${displayName}--grow`]: shouldFillRemainingHeight
        }
    );

    return (
        <section className={componentClassNames}>
            {children}
        </section>
    );
};

PitComponent.displayName = 'PitComponent';

PitComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    shouldFillRemainingHeight: PropTypes.bool
};

PitComponent.defaultProps = {
    children: '',
    className: '',
    shouldFillRemainingHeight: false
};

export default PitComponent;
