import React from 'react'

const Button = (className, href, onClick, children, px, white) => {
  const renderButton = () => (
    <button>
        <span>{children}</span>
        
    </button>
  );

  return renderButton();
}

export default Button
