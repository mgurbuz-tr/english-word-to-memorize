import React from 'react';

const Backdrop = ({ show }: { show: boolean }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 blur-lg z-40" style={{backgroundColor:"hsl(0deg 0% 0% / 39%)"}}></div>
    );
};

export default Backdrop;