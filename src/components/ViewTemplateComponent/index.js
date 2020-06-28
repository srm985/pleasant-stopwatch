import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

import '../../styles/global.scss';

const ViewTemplateComponent = (props) => {
    const {
        children,
        viewName
    } = props;

    const {
        displayName
    } = ViewTemplateComponent;

    const componentClassNames = classNames(
        displayName,
        viewName
    );

    const templateHeaderClassNames = classNames(
        `${displayName}__header`,
        'mb--3'
    );

    return (
        <main className={componentClassNames}>
            <h1 className={templateHeaderClassNames}>{'Pleasant Stopwatch'}</h1>
            {children}
        </main>
    );
};

ViewTemplateComponent.displayName = 'ViewTemplateComponent';

ViewTemplateComponent.propTypes = {
    children: PropTypes.node,
    viewName: PropTypes.string
};

ViewTemplateComponent.defaultProps = {
    children: '',
    viewName: ''
};

export default ViewTemplateComponent;
