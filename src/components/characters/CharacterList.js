import { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import { Card } from 'semantic-ui-react'
import './Character.css'

const CharacterList = () => {
  const [characterData, setCharacterData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const twentyTwoCharacters = [...Array(23).keys()]
        const result = await axios(
          `https://rickandmortyapi.com/api/character/${twentyTwoCharacters}`
        )
        setCharacterData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className='character-list'>
      <h2>671 Characters</h2>
      <p>* Showing 22 *</p>
      <Card.Group itemsPerRow={5}>
        {characterData.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Card.Group>
    </div>
  )
}

export default CharacterList