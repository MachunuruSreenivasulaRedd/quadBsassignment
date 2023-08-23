import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import MovieItem from '../MovieItem'

class MovieList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getMoviesData()
  }

  getMoviesData = async () => {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.show.id,
      show: item.show,
      name: item.show.name,
      image: item.show.image,
      rating: item.show.rating,
      summary: item.show.summary,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="movieList">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(item => <MovieItem item={item} key={item.id} />)
        )}
      </div>
    )
  }
}
export default MovieList
