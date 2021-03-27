import React from 'react'
import MatchesContainer from './MatchesContainer'
import Deck from './Deck'
import './DashboardContainer.css'

const DashboardContainer = () => {
  return (
    <div className='dashboard-container'>
      <MatchesContainer />
      <Deck />
    </div>
  )
}

export default DashboardContainer
