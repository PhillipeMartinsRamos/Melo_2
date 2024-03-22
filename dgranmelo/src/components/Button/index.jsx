import './Button.css'

const Button = ({children}) => {
  return (
    <button className='button-standard'>
        {children}
    </button>
  )
}

export default Button