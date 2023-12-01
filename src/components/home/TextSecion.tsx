import React from 'react';

interface TextSecionProps {
    text: string,
    bgColor: string,
};

const TextSecion: React.FC<TextSecionProps> = ({ text, bgColor }) => {
    const textParts = text.split(' ');
    return (
        <section className="text-section" style={{ backgroundColor: bgColor }}>
            {textParts.map((part, index) => (
                <span key={index} className={getClassByIndex(index, bgColor)}>
                    {part}
                </span>
            ))}
            <div style={{ color: bgColor }} className="down-arrow"></div>
        </section>
    )
};

const getClassByIndex = (index: number, bgColor: string): string => {
    if (bgColor === 'black') {
        if (index === 0) {
            return 'white mr';
        } else if (index === 1) {
            return 'green';
        } else {
            return 'white';
        }
    } else {
        if (index === 0) {
            return 'black mr';
        } else if (index === 1) {
            return 'green';
        } else {
            return 'black';
        }
    }
};

export default TextSecion;