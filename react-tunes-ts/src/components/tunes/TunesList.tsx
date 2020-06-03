import React from 'react'

//Styles
import './TunesList.scss'

interface Props {
    songs: {id: number, artist: string, name: string}[]
}

export const TunesList: React.FC<Props> = props => {
    const { songs } = props

    return (
        <div>
            <ul className='tunes-list'>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.artist + ' - ' + song.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}