import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem/index'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    count: 0,
    name: '',
    comment: '',
    randomNumber: Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    ),
  }

  onClickCommentBtn = event => {
    event.preventDefault()
    const {name, comment, randomNumber} = this.state
    const randomN = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      randomNumber,
      isLiked: true,
      time: formatDistanceToNow(new Date()),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
      randomNumber: randomN,
    }))
  }

  onChangeLikeImage = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(eachComment => {
        if (id !== eachComment.id) {
          return eachComment
        }
        return null
      }),
      count: prevState.count - 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, count, name, comment} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="main-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="comments-image"
            alt="comments"
          />
          <div className="inputs-container">
            <p className="description">Say something about 4.0 Technologies</p>
            <form className="form-container" onSubmit={this.onClickCommentBtn}>
              <input
                type="search"
                value={name}
                className="input-element"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                className="textarea-element"
                value={comment}
                rows="7"
                cols="25"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
        </div>
        <hr className="horizontal-line" />
        <ul className="list-container">
          <li className="count-comment-container">
            <p className="count-para">{count}</p>
            <p className="count-comment-para">Comments</p>
          </li>
          {commentsList.map(eachComment => (
            <CommentItem
              backColors={initialContainerBackgroundClassNames}
              eachComment={eachComment}
              onChangeLikeImage={this.onChangeLikeImage}
              onDeleteComment={this.onDeleteComment}
              key={eachComment.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
