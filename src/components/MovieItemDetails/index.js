import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class MovieItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
    isClicked: false,
    userName: '',
    age: '',
    noTickets: '',
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  bookTicket = () => {
    this.setState({isClicked: true})
  }

  getInput = event => {
    this.setState({userName: event.target.value})
  }

  getAge = event => {
    this.setState({age: event.target.value})
  }

  getTicketCount = event => {
    this.setState({noTickets: event.target.value})
  }

  addToLocalStorage = () => {
    const {userName, age, noTickets} = this.state
    const userData = {
      userName,
      age,
      noTickets,
    }
    localStorage.setItem('userData', JSON.stringify(userData))
    this.setState({isClicked: false})
  }

  renderForm = () => {
    const {blogData, userName, age, noTickets} = this.state
    return (
      <form className="formContainer">
        <p className="formHeading">
          Book Tickets for{' '}
          <span className="selectedMovie">{blogData.name}</span>
        </p>
        <input
          type="text"
          value={userName}
          placeholder="Enter Your Name"
          onChange={this.getInput}
          className="input"
        />
        <input
          type="text"
          value={age}
          placeholder="Enter Your Age"
          onChange={this.getAge}
          className="input"
        />
        <input
          type="text"
          value={noTickets}
          onChange={this.getTicketCount}
          className="input"
          placeholder="No Of Tickets Required"
        />
        <button
          type="button"
          onClick={this.addToLocalStorage}
          className="finishBtn"
        >
          Finish Booking
        </button>
      </form>
    )
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      name: data.name,
      summary: data.summary,
      image: data.image.original,
      rating: data.rating.average,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading, isClicked} = this.state
    const {summary, image, name, rating} = blogData
    let img
    let rate
    if (image == null) {
      img = 'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'
    } else {
      img = image
    }

    if (rating == null) {
      rate = 'Not Recorded'
    } else {
      rate = rating
    }
    return (
      <div>
        {isClicked ? this.renderForm() : null}
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="movieCard">
            <img src={img} alt={name} className="movieImage" />
            <h1 className="name">{name}</h1>
            <span className="rating">
              <span className="head">rating</span>:{rate}
            </span>
            <p className="content">
              <span className="head">SUMMARY: </span>
              {`${summary}`}
            </p>
            <button type="button" onClick={this.bookTicket} className="bookBtn">
              Book Tickets
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default MovieItemDetails
