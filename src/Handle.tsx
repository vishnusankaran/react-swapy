import React from 'react'

type HandleProps = React.HTMLProps<HTMLDivElement>

const Handle: React.FC<HandleProps> = ({ children, ...rest }) => {
    return (<span data-swapy-handle {...rest}>
        {children}
    </span>)
}

export default Handle