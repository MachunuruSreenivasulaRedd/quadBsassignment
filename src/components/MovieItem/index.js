import './index.css'
import {Link} from 'react-router-dom'

const MovieItem = props => {
  const {item} = props
  const {id, image, rating, name} = item
  let img
  let rate

  if (image == null) {
    img = 'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
  } else {
    img = image.original
  }

  if (rating.average == null) {
    rate = 'Not Recorded'
  } else {
    rate = rating.average
  }
  return (
    <div className="item-container">
      <div className="movie" id="img">
        <Link to={`/show/${id}`} className="item" props={item}>
          <img src={img} alt={id} className="movieImage" />
        </Link>
        <h1 className="movieName">{name}</h1>
        <p className="rating">{`rating:${rate}`}</p>
      </div>
    </div>
  )
}

export default MovieItem
