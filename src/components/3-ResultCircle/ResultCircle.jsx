import "./ResultCircle.scss";

import React from 'react';

const ResultCircle = ({ percentage, color, label }) => {
    const strokeDasharray = `${percentage}, 100`;

    return (
        <div className="result-circle">
            <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    stroke={color}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    strokeDasharray={strokeDasharray}
                />
                <text x="18" y="20.35" className="percentage">{Math.round(percentage)}%</text>
            </svg>
            <p className="circle-label">{label}</p>
        </div>
    );
};

export default ResultCircle;