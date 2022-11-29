import React, {useState} from 'react'
import HogDetails from "./HogDetails"

function HogTile({ hog: { name, image, specialty, weight, greased, "highest medal achieved": medal }} ) {
  const [showDetails, setShowDetails] = useState(false)

  function toggleShowDetails() {
    setShowDetails(currentShowDetails => !currentShowDetails)
  }

  return (
    <article className="pigTile" onClick={toggleShowDetails}>
       <h2>{name}</h2>
       <img src={image}/>
       {showDetails && 
       <HogDetails 
          specialty={specialty} 
          weight={weight} 
          greased={greased} 
          medal={medal}
          />
          }
    </article>
  )
}

export default HogTile;
