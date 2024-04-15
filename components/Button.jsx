import './Button.css'
const Button = ({ onClick, children }) => {
  return (
    <div className="flex-container">
  <button className="button"
      onClick={onClick}
    >
      {children}
    </button>
    </div>
  )
}

export default Button