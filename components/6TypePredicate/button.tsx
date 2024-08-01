import React, { FC } from 'react'

interface PrimaryButtonProps {
    type : "primary",
    label : string
}

interface SecondaryButtonProps {
    type : "secondary",
    label : string
}

type ButtonProps = PrimaryButtonProps | SecondaryButtonProps;

function isPrimary(props : ButtonProps) : props is PrimaryButtonProps {
    return props.type === 'primary'
}

export const primaryButtonProps : PrimaryButtonProps = {
    type : 'primary',
    label : "Primary Button"
}

export const secondaryButtonProps : SecondaryButtonProps = {
    type : 'secondary',
    label : "Secondary Button"
}

const  Button : FC<ButtonProps> = (props)=> {
    if(isPrimary(props)){
        return <button style={{ backgroundColor : "blue", color : "white"}}>{props.label}</button>
    }
  return <button style={{backgroundColor : "white", color : "black", border : "1px solid black"}}>{props.label}</button>
}

export default Button
