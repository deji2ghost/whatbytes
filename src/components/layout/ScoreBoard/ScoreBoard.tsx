import React from 'react'
import { ScoreBoardProp } from './ScoreBoardProp'

const ScoreBoard: React.FC<ScoreBoardProp> = ({icon, score, text}) => {
  return (
    <div className="flex">
      <h1>{icon}</h1>
      <div className="flex flex-col">
        <p>{score}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default ScoreBoard
