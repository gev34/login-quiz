const TrueLogin = ({setShowLoginInfo}) => {
    return (
        <div style={{
            backgroundColor : "green",

        }}>
            <h2>SUCCESS</h2>
            <button onClick={() => {
                setShowLoginInfo(false)
            }}>X</button>
        </div>
    )
}
export default TrueLogin