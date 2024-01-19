import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <div className={css.options}>
        {options.map(option =>
          <button
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </button>)}
      </div>
    )
}
