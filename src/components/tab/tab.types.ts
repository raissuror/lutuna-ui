export type TabProps = Readonly<{
    className?: string,
    children: React.ReactNode,
    active?: boolean
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    autoFocus?: boolean,
}>;
