import {Component} from 'react'
import ReposCard from '../ReposCard'
import './index.css'

class MostStarredRepos extends Component {
  state = {reposData: []}

  componentDidMount() {
    this.getReposData()
  }

  getReposData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = data.items.map(eachData => ({
        avatarUrl: eachData.owner.avatar_url,
        repositoryName: eachData.name,
        description: eachData.description,
        starsCount: eachData.stargazers_count,
        issuesCount: eachData.open_issues_count,
        time: eachData.pushed_at,
        ownerName: eachData.owner.login,
      }))
      this.setState({reposData: updatedData})
    }
  }

  render() {
    const {reposData} = this.state
    console.log(reposData)
    return (
      <div>
        <h1 className="heading">Most Starred Repos</h1>
        <ul className="ul-cotainer">
          {reposData.map(eachData => (
            <ReposCard
              key={eachData.id}
              repoDetails={eachData}
              getReposData={this.getReposData}
            />
          ))}
        </ul>
      </div>
    )
  }
}

// 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

export default MostStarredRepos
