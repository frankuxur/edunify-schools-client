const School = ({ school: { name, address, city, image } }) => {
  return (
    <article className="school">
      <img 
        src={`http://localhost:3001/${image}`} 
        alt={name} 
        className="school__image"
      />

      <div className="school__info">
        <h3 className="school__name">{name}</h3>
        
        <div className="school__location">
          <i className="ri-map-pin-line icon"></i>

          <div className='school__location-info'>
            <span className='school__address'>{address}, </span>
            <span className='school__city'>{city}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default School