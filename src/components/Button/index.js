const Button = ({text , disabled , onClick , color , backgroundColor}) => {
     return (
        <button 
            onClick={onClick}
            disabled = {disabled}
            style = {{
                color:disabled ? "rgb(59, 57 ,57)" : color ? color : "#fff",
                backgroundColor: disabled ? "gray" : backgroundColor ? backgroundColor : "#166fe5",
                cursor: disabled ? "not-allowed" : "pointer"
            }}
        >
            {text}
        </button>
     )
 }
 export default Button