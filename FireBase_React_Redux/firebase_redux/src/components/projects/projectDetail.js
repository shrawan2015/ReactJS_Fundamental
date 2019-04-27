import React from 'react'

export default function projectDetail(props) {

    const id = props.match.params.id;

  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">
                    Project Title {id}
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem blanditiis architecto velit totam sunt numquam nesciunt quod porro debitis! Dolor dolorum pariatur aut dolores nobis quia atque porro repudiandae nam!</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div> Posted by the net ninja</div>
                <div> 2nd September,2am</div>

            </div>

        </div>
    </div>
  )
}
