const Wrapper = ({ children, page }) => {
  
  return (
    <div className={`wrapper ${page === 'show' ? '' : 'magicpattern'}`}>
        {children}
    </div>
  )
}

export default Wrapper