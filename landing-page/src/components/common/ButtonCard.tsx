import React from 'react';
import '../Common.css';
type ButtonProps = {
  className?: string;
};
const ButtonCard = ({ className = '' }: ButtonProps) => {
  return (
    <div
      style={{
        backgroundColor: '#6D1600',
        position: 'relative',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={`btn-small ${className}`}
    >
      <span
        style={{
          backgroundColor: '#fff',
          width: '2px',
          height: '16px',
          position: 'absolute',
          top: '25%',
          left: '50%',
        }}
      ></span>
      <span
        style={{
          backgroundColor: '#fff',
          width: '2px',
          height: '16px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(90deg)',
        }}
      ></span>
    </div>
  );
};

export default ButtonCard;
