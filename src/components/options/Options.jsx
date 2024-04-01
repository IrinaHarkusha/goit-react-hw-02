import s from './Options.module.css'

const Options = ({handleVote, handleDelete, totalSalary}) => {
  return (
    <div className={s.wrap}>
        <button onClick={() => handleVote("good")}>Good</button>
        <button onClick={() => handleVote("neutral")}>Neutral</button>
        <button onClick={() => handleVote("bad")}>Bad</button>
        {totalSalary !== 0 ? <button onClick={handleDelete}>Reset</button> : " "}
    </div>
  )
}

export default Options
