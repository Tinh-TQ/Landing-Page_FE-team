import React from 'react';
import './Common.css';
import './ResponsiveApp.css';

type LineProps = {
  className?: string;
};

const Line = ({ className = '' }: LineProps) => {
  return <div className={`wave ${className}`}></div>;
};

export default Line;
