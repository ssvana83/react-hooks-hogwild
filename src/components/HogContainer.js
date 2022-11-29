import React from 'react'
import HogTile from "./HogTile"

function HogContainer({ hogs }) {

  const renderHogs = hogs.map(hog => <HogTile key={hog.name} hog={hog}/>)
  return (
    <div>
      {renderHogs}
    </div>
  )
}

export default HogContainer;
