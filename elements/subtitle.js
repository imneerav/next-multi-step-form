const NMFDSubtitle = ({children, className}) => {
    className = (className == undefined) ? "" : " " + className;
    const classes = "subtitle has-text-primary" + className;
    return(
        <h3 className={classes}>{children}</h3>
    )
}
export default NMFDSubtitle