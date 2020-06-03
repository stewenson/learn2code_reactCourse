import React, {useState} from 'react'

// component
import {TunesList} from "../components/tunes/TunesList";
import {TunesSearchForm} from "../components/tunes/TunesSearchForm";

interface Props {

}

// component
export const Tunes: React.FC<Props> = () => {
    // state
    const [searchQuery, setSearchQuery] = useState('')
    const [songs, setSongs] = useState([
        {id: 1, artist: 'Great Artist', name: 'Great song'},
        {id: 2, artist: 'Vcera vecer hrala srna', name: 'pokemon'},
        {id: 3, artist: 'QWE', name: 'qeqw'}
    ])

    // callback
    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) + 1,
            artist: data,
            name: data
        }
        setSongs([...songs, newSong ])
    }

    const handleInputChange = (data: string) => {
        setSearchQuery(data)
    }

    // template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm
                searchQuery={searchQuery}
                onInputChange={handleInputChange}
                onSearchFormSubmit={handleSearchFormSubmit}
            />
            <TunesList songs={songs}/>
        </article>
    )
}