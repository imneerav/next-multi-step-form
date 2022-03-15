import { Button } from 'rbx'
const NMFDButton = ({text, align, type, className, onClick, children}) => {
    return(
        <Button.Group align={align}>
            <Button color={className} onClick={onClick} key={type}>{children}</Button>
        </Button.Group>
    )
}
export default NMFDButton