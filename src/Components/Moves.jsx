import React from 'react'

const Moves = (props) => {
  return (
    <>
    {
            props.moves.map((ele)=>(<div className="about-item">
            <div className="tag-name">{ele.move.name}</div>
            <div className="tag-details">
              {
                ele.base_stat
              }
            </div>
          </div>))
        }
    
    </>
  )
}

export default Moves
