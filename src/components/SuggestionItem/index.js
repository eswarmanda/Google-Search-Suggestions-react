import './index.css'

const List = props => {
  const {itemDetails, onSelect} = props
  const {id, suggestion} = itemDetails
  const isClicked = () => {
    onSelect(id)
  }
  return (
    <li className="list-ele">
      <p className="suggest">{suggestion}</p>
      <img
        className="arrow-img"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={isClicked}
      />
    </li>
  )
}

export default List
