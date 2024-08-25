import React, { ReactNode } from 'react'

interface ItemProps {
    className?: string,
    name: string,
    children?: ReactNode,
}

const Item: React.FC<ItemProps> = ({ name, children, ...rest }) => {
    return (<div data-swapy-item={name} {...rest}>
        {children}
    </div>)
}

export default Item