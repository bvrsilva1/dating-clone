import React from 'react'
import { Avatar } from '@material-ui/core'
import ConversationPreview from './ConversationPreview'
import { conversations } from '../../data/conversations.json'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import './MatchesContainer.css'

const MatchesContainer = () => {
  return (
    <div className='matches-container'>
      <div className='profile'>
        <Avatar alt='avatar image'>BS</Avatar>
        <h3>Bruno</h3>
      </div>
      <Accordion className='accordion' defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='conversations control'
          id='conversations'
        >
          <h4>Conversations (Recent)</h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className='matches'>
            {conversations && conversations.length > 0
              ? conversations.map((conversation) => (
                  <ConversationPreview
                    key={conversation.id}
                    name={conversation.name}
                    message={conversation.message}
                  />
                ))
              : 'Sorry Bro'}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MatchesContainer
