import s from './Feedback.module.css'

const Feedback = ({state, totalSalary, positive}) => {
  return (
    <div className={s.list}>
          <h2>Good:{state.good}</h2>
          <h2>Neutral:{state.neutral}</h2>
          <h2>Bad:{state.bad}</h2>
          <h2>Total:{totalSalary}</h2>
          <h2>Positive:{positive}%</h2>
    </div>
  )
}

export default Feedback
