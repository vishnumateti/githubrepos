import {Link} from 'react-router-dom'
import './index.css'

const ReposCard = props => {
  const {repoDetails} = props
  const {
    avatarUrl,
    repositoryName,
    description,
    starsCount,
    issuesCount,
    time,
    ownerName,
  } = repoDetails
  return (
    <li className="list-container">
      <Link to="/specific" className="link">
        <div className="card-container">
          <img src={`${avatarUrl}`} alt="avatar" className="image" />
          <div>
            <h1>{repositoryName}</h1>
            <p>{description}</p>
            <div className="count-section">
              <p className="stars">stars: {starsCount}</p>
              <p className="stars">issues: {issuesCount} </p>
              <p className="publish-date">
                Last Pushed {time} by {ownerName}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ReposCard
