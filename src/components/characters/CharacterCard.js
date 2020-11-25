import React, { useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
import CharacterModal from './CharacterModal'
import './Character.css'

const CharacterCard = ({character}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  return (
    <Card key={character.id}>
      <Image src={character.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{character.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{character.status}</span>
        </Card.Meta>
        <Card.Description>
          {character.origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <CharacterModal 
          character={character}
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
        />
      </Card.Content>
    </Card>
  )
}

export default CharacterCard
