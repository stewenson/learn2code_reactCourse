import React, {ChangeEvent, FormEvent, useState} from 'react'

interface Props {

}

// component
export const Tunes: React.FC<Props> = () => {
    //state
    const [query, setQuery] = useState('')
    const [songs, setSongs] = useState([
        {id: 1, artist: 'Great Artist', name: 'Great song'},
        {id: 2, artist: 'Vcera vecer hrala srna', name: 'pokemon'},
        {id: 3, artist: 'QWE', name: 'qeqw'}
    ])

    // Submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) + 1,
            artist: query,
            name: query
        }
        setSongs([...songs, newSong])
    }
    // input element
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    // template
    return (
        <div className='home'>
            <h1>Tunes</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInput}/>
            </form>

            <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.artist + ' - ' + song.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}