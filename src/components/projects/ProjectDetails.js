import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails = props => {
  const {id} = useParams();
  return (
    <div className="container project-details section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ratione deleniti corporis laboriosam aspernatur quo laborum libero. Amet accusamus eius ut facilis optio tempore error nulla. Reiciendis laboriosam officia aperiam numquam ipsum, quos unde distinctio eaque tempora sunt enim sit assumenda earum, praesentium voluptates nam ea ipsam aliquid esse! Nesciunt.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by Jubayer</div>
          <div className="grey-text">3rd September,2am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
