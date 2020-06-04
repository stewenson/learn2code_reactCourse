import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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
            <TransitionGroup component="ul" className='tunes-list'>
                {songs.map(song => (
                    <CSSTransition key={song.id} timeout={200} classNames="song">
                        <li key={song.id}>
                            <TunesSong song={song}/>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
}