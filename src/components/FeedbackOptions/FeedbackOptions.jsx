import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.options}>
        {options.map(option =>
          <button
            onClick={() => onLeaveFeedback(option)}
            key={options.indexOf(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>)}
      </div>
    )
}
