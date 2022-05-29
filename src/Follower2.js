import React from 'react'

const FollowerD = ({id, name, image, info, glass}) => {
    console.log((id))
  return (
    <article  className='cocktail'>
        <div className="img-container">
            
          <img src={image} alt={name}/>
        </div>
        
        <div className="cocktail-footer">
            <h3>{name}</h3>
            <h4>{glass}</h4>
            <p>{info}</p>
            
        </div>
          
          </article>
  )
}
export default FollowerD