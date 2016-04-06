import React, { PropTypes } from 'react'

const Link = ({ active, className, children, onClick }) => {
    if (active) {
        var buttonClassName = `${className} active`;
        return ( <button className={buttonClassName}>
            {children}
        </button>);
    }

    return (
        <button className={className}
                onClick={e => {
         e.preventDefault();
         onClick();
       }}
        >
            {children}
        </button>
    )
};

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link;