const Button = (props:any) => {
    return (
       <button 
            type='button'
            style={{
                backgroundColor:'#ddd',
                border:'1px solid #ddd',
                padding:'10px 20px',
                margin:'5px'
            }}
        >
            {props.text}
       </button>
    )
}

export default Button;