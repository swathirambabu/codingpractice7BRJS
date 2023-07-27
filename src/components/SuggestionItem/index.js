// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, updateSearchInput} = props
  const {suggestion} = suggestionItemDetails

  const onClickSuggestions = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestions}
      >
        <img
          src=" https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-image"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
