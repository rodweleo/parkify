type ButtonType = {
    type: HTMLButtonElement
}

export const Button = ({ type, label, style, disabled }) => {
    return <button type={type} disabled={disabled} className={style}>{label}</button>
}