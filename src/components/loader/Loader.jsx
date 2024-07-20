import './loader.css'

const Loader = ({ color }) => {

  const style = color ? {
    backgroundColor: `var(--${color})`,
    width: `var(--xxxl)`
  } : {}

  return (
    <div className="loader" style={style}></div>
  )
}

export default Loader