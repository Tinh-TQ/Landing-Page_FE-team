import React, { Component } from 'react'
// import './button.scss'

type State = {}
type Props = {
    text?: string,
    disable?: boolean,
    className?: string,
    onClick: Function,
    children?: string // Add this line to include the 'children' property
}
type ButtonSize = "small" | "medium";

export default class Button extends Component<Props, State> {
    render() {
        const { text, disable, className, onClick, children = 'Click' } = this.props
        const value = text || children
        return (
            <button className={disable ? `disable ${className}` : className} onClick={(e) => onClick(e)}>{value}</button>
        )
    }
}


// import { FC } from "react";
// import clsx from "clsx";

// type ButtonSize = "small" | "medium";
// type ButtonVariant = "primary" | "secondary";

// interface ButtonProps {
//   size?: ButtonSize;
//   variant?: ButtonVariant;
// }

// const buttonSizeClasses: Record<ButtonSize, string> = {
//   small: "py-1 px-2",
//   medium: "py-2 px-4",
// };

// const buttonVariantClasses: Record<ButtonVariant, string> = {
//   primary: "bg-blue-700 text-white",
//   secondary: "border border-gray-300 text-black",
// };

// const Button: FC<ButtonProps> = ({
//   children,
//   size = "small",
//   variant = "primary",
// }) => (
//   <button
//     className={clsx(buttonSizeClasses[size], buttonVariantClasses[variant])}
//   >
//     {children}
//   </button>
// );