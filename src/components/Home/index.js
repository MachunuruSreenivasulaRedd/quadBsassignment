import './index.css'

import MovieList from '../MovieList'

const Home = () => (
  <div className="home-container">
    <img
      src="https://assets-in.bmscdn.com/promotions/cms/creatives/1690629469326_webbannernpa.jpg"
      className="offer-banner"
      alt="offer"
    />
    <MovieList />
  </div>
)

export default Home
