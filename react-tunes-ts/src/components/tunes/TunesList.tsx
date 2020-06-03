import React from 'react'

//Styles
import './TunesList.scss'
import {Songs} from "../../types";

import {TunesSong} from "./TunesSong";

interface Props {
    songs: Songs[] // pole objektov {}[]
}

export const TunesList: React.FC<Props> = props => {
    const { songs } = props

    return (
        <div>
            <ul className='tunes-list'>
                {songs.map(song => (
                    <li key={song.id}>
                        <TunesSong song={song}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}