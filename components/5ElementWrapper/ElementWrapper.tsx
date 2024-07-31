import React, { FC, type ReactNode } from 'react';

interface ElementWrapperProps {
    elementType : 'div' | 'h1' | 'span' | 'button',
    children : ReactNode,
    className? : string,
    onClick? : ()=>void
}

const  ElementWrapper : FC<ElementWrapperProps> = ({elementType,children,className,onClick}) =>{
    const Element = elementType as keyof JSX.IntrinsicElements;
  return (
    <Element className={className} onClick={onClick}>
        {children}
    </Element>
  )
}

export default ElementWrapper
