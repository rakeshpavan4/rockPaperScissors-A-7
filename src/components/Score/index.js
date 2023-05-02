import './index.css'

const Score = props => {
  const {score} = props
  return (
    <>
      <div>
        <div className="container">
          <div className="players-container">
            <h1>
              ROCK
              <br /> PAPER <br /> SCISSORS
            </h1>
          </div>
          <div className="score-container">
            <p>Score</p>
            <p className="para">{score}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Score
