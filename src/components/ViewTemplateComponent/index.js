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

    return (
        <main className={componentClassNames}>
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
