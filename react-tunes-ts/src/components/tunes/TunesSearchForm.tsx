import React, {ChangeEvent, FormEvent, useRef} from 'react'
import { debounce } from 'lodash-es'
//Styles
import './TunesSearchForm.scss'

// props
interface Props {
    onSearch: (query: string) => void
}

// component
export const TunesSearchForm: React.FC<Props> = (props) => {
    const searchInput = useRef<HTMLInputElement>(null)

    // Submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMusic()
    }
    // input element
    const handleInput = debounce( (e: ChangeEvent<HTMLInputElement>) => {
        searchForMusic()
    }, 500)

    // search for music
    const searchForMusic = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoFocus
                    ref={searchInput}
                    onChange={handleInput}
                    className='search'
                />
            </form>
        </div>
    )
}