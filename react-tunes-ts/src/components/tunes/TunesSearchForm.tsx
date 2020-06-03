import React, {ChangeEvent, FormEvent} from 'react'

//Styles
import './TunesSearchForm.scss'

// props
interface Props {
    searchQuery: string
    onSearchFormSubmit: (data: string) => void
    onInputChange: (data: string) => void
}

// component
export const TunesSearchForm: React.FC<Props> = (props) => {
    const { searchQuery } = props
    // Submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       props.onSearchFormSubmit(searchQuery)
    }
    // input element
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(e.target.value)
    }

    // template
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInput}
                    className='search'
                />
            </form>
        </div>
    )
}