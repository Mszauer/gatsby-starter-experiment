import React from "react";
import PropTypes from "prop-types"

function Chevron({ className, height, width, fill }) {
    return (
        <svg
            className={className}
            height={height}
            width={width}
            viewBox="0 0 266 438"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
                fill={fill}
            />
        </svg>
    );
}
Chevron.propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    fill: PropTypes.string,
}

Chevron.defaultProps = {
    className: "",
    height: 100,
    width: 100,
    fill: "#ddd",
}

export default Chevron;