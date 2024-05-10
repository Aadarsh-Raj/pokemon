import React from 'react'

const Stats = (props) => {
  return (
    <>
    <div className="more-details-container">
        {
            props.stats.map((ele)=>(<div className="about-item">
            <div className="tag-name">{ele.stat.name}:</div>
            <div className="tag-details">
              {
                ele.base_stat
              }
            </div>
          </div>))
        }
        
        
    
      </div>
    </>
  )
}

export default Stats
