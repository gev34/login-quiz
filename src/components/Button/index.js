import { memo } from "react"

export default memo(function Button ({text , disabled , onClick , color , backgroundColor , className , border}) {
     console.log("btn called")
    return (
        <button 
            onClick={onClick}
            disabled = {disabled}
            className = {className}
            style = {{
                color:disabled ? "rgb(59, 57 ,57)" : color ? color : "#fff",
                backgroundColor: disabled ? "gray" : backgroundColor ? backgroundColor : "#166fe5",
                cursor: disabled ? "not-allowed" : "pointer",
                border:disabled ? "2px solid gray" : border ? border : '#fff'
            }}
        >
            {text}
        </button>
     )
 })
 