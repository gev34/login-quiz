const FalseLogin = ({setShowLoginInfo}) => {
    return (
        <div style={{
            backgroundColor : "red",

        }}>
            <h2>ERROR</h2>
            <button onClick={() => {
                setShowLoginInfo(false)
            }}>X</button>
        </div>
    )
}
export default FalseLogin