import React from 'react'
import {Songs} from "../../types"
import {truncate} from "lodash-es"
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

// styles
import './TunesSong.scss'


interface Props {
    song: Songs
}

// component
export const TunesSong: React.FC<Props> = (props) => {
    const { song } = props

    const songify = (song: Songs): string => {
        const newTitle = song.artist + ' - ' + song.title
        return shorten(newTitle, 100)
    }

    const shorten = (str: string, len= 55): string => {
        return truncate(str, { length: len})
    }

    // template
    return (
        <article className='song'>
            <div className="inside">
                <h2>{songify(song)}</h2>
                <div className="player">
                    {song.artwork && (
                        <img src={song.artwork} alt="album art"/>
                    )}
                    <audio controls src={song.audioFile}/>
                </div>
            </div>
            <footer className="meta">
                {shorten(song.album)}
            </footer>
        </article>
    )
}