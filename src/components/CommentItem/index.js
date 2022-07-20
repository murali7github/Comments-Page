// Write your code here
import './index.css'

const CommentItem = props => {
  const {backColors, eachComment, onChangeLikeImage, onDeleteComment} = props
  const {id, name, comment, randomNumber, isLiked, time} = eachComment
  const firstLetter = name.slice(0, 1).toUpperCase()

  const onClickLike = () => {
    onChangeLikeImage(id)
  }
  const onDelete = () => {
    onDeleteComment(id)
  }
  return (
    <li className="list-item">
      <div className="user-comment-container">
        <div className={`profile ${backColors[randomNumber]}`}>
          {firstLetter}
        </div>
        <div className="comment-details-container">
          <div className="name-container">
            <h1 className="name-heading">{name}</h1>
            <p className="time-para">{time}</p>
          </div>
          <p className="comment-details-para">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        {isLiked ? (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              className="like-image"
              alt="like"
            />
            <button type="button" className="like-button" onClick={onClickLike}>
              Like
            </button>
          </div>
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              className="like-image"
              alt="like"
            />
            <button
              type="button"
              className="like-button blue"
              onClick={onClickLike}
            >
              Like
            </button>
          </div>
        )}

        <button
          type="button"
          testId="delete"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
