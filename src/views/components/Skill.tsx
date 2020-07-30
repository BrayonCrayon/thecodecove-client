import React from 'react';

const randomColor = require('randomcolor');

interface ISkillProps {
    name: string,
    className: string,
}

const Skill = ({ name = "", className = "", }: ISkillProps) => {

    const skillColor = {
        'backgroundColor': randomColor({
            luminosity: 'light',
            hue: 'random'
        }),
    };

    return (
        <div className={className} style={skillColor}>
            {name}
        </div>
    )
}

export default Skill;