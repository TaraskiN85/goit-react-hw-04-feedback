import { Notification } from "components/Notification/Notification"
import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  
  return (
    <div className={css.statistics}>
      {total < 1 ? <Notification message="There is no feedback" />
        : (<div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Posititve Feedback: {positivePercentage}%</p>
        </div>
      )}
    </div>
  )
}