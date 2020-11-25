import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import './Character.css'

const CharacterModal = ({character, isModalOpen, setIsModalOpen}) => {
  return (
    <Modal
      key={character.id}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
      open={isModalOpen}
      trigger={<Button className='info-button'>More Info</Button>}
    >
      <Modal.Header>{character.name}</Modal.Header>

      <Modal.Content image>
        <Image size='medium' src={character.image} wrapped />
        <Modal.Description>
          <div><span>Species:</span> {character.species}</div>
          <div><span>Type:</span> {character.type ? character.type : "No type"}</div>
          <div><span>Gender:</span> {character.gender}</div>
          <div><span>Origin:</span> {character.origin.name}</div>
          <div><span>Location:</span> {character.location.name}</div>
          <div><span>Status:</span> {character.status}</div>
        </Modal.Description>
      </Modal.Content>
      
      <Modal.Actions>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CharacterModal