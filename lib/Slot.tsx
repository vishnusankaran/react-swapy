import React, { ReactNode } from 'react'

interface SlotProps {
    id: number | string,
    className?: string,
    name?: string,
    children?: ReactNode,
}

const Slot: React.FC<SlotProps> = ({ id, name, children, ...rest }) => {
    return (<div data-swapy-slot={name ?? `slot-${id}`} {...rest}>
        {children}
    </div>)
}

export default Slot