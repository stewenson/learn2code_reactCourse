import React, {useState} from 'react'
import {Songs} from "../types";
import axios from 'axios'
// components
import {TunesList} from "../components/tunes/TunesList";
import {TunesSearchForm} from "../components/tunes/TunesSearchForm";

interface SongFromITunes {
    trackId: number
    artistName: string
    previewUrl: string
    artworkUrl100?: string
    trackName: string
    collectionName: string
    kind?: string
}

// component
export const Tunes: React.FC = () => {
    // state
    const [songs, setSongs] = useState([])

    // callback
    const handleSearch = async (query: string) => {
        const url = `https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&limit=5&
				entity=musicTrack`;
        await axios.get(url)
            .then(response => {
            let iTunesSongs = response.data.results
                .filter((song: SongFromITunes) => song.kind === 'song')
                .map((song: SongFromITunes) => extractData(song))
            setSongs(iTunesSongs)
        })
    }

    // @ts-ignore
    const extractData = ({
        trackId: id,
        artistName: artist,
        previewUrl: audioFile,
        artworkUrl100: artwork,
        trackName: title,
        collectionName: album
    }: SongFromITunes) => {
        return {id, artist, audioFile, artwork, title, album} as Songs
    }


    // template
    return (
        <article className='tunes'>
            <h1>Tunes</h1>
            <TunesSearchForm onSearch={handleSearch}/>
            <TunesList songs={songs}/>
        </article>
    )
}