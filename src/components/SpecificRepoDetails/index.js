import './index.css'

const SpecifiRepoDetails = props => {
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
      <img src={`${avatarUrl}`} alt="avatar" />
      <div>
        <h1>{repositoryName}</h1>
        <p>{description}</p>
        <div className="count-section">
          <p>{starsCount}</p>
          <p>{issuesCount}</p>
          <p>
            Last Pushed {time} by {ownerName}
          </p>
        </div>
      </div>
    </li>
  )
}

export default SpecifiRepoDetails
