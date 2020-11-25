import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import EpisodeModal from './EpisodeModal'

const EpisodeCard = ({episode}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <Card key={episode.id}>
      <Card.Content>
        <Card.Header>{episode.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Aired on {episode.air_date}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <EpisodeModal 
          episode={episode}
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
        />
      </Card.Content>
    </Card>
  )
}

export default EpisodeCard
