const Button = ({text}:any) => {
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
            {text}
       </button>
    )
}

export default Button;