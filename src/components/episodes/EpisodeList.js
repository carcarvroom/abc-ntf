import { useState, useEffect } from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'
import { Card } from 'semantic-ui-react'
import './Episode.css'

const EpisodeList = () => {
  const [episodeData, setEpisodeData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const eighteenEpisodes = [...Array(19).keys()]
        const result = await axios(
          `https://rickandmortyapi.com/api/episode/${eighteenEpisodes}`
        )
        setEpisodeData(result.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className='episode-list'>
      <h2>41 Episodes</h2>
      <p>* Showing 18 *</p>
      <Card.Group itemsPerRow={2}>
        {episodeData.map(episode => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </Card.Group>
    </div>
  )
}

export default EpisodeList