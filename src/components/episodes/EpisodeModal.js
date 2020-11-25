import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'semantic-ui-react'

const EpisodeModal = ({episode, isModalOpen, setIsModalOpen}) => {
  const [characters, setCharacters] = useState([])

  const filterCharacters = episode.characters.map(character => {
    const characterArray = character.split("/")
    return characterArray[characterArray.length-1]
  })
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/${filterCharacters}`
      )
      setCharacters(result.data)
    }
    fetchData()
  }, [])

  return (
    <Modal
      key={episode.id}
      onClose={() => setIsModalOpen(false)}
      onOpen={() => setIsModalOpen(true)}
      open={isModalOpen}
      trigger={<Button>More Info</Button>}
    >
      <Modal.Header>{episode.name}</Modal.Header>
      
      <Modal.Content>
        <Modal.Description>
          <div><span>Episode:</span> {episode.episode}</div>
          <div><span>Aired on:</span> {episode.air_date}</div>
          <div>
            <span>Characters:</span> 
              <ul>
                {characters.map(character => {
                  return <li>{character.name}</li>
                })}
            </ul>
          </div>
        </Modal.Description>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default EpisodeModal