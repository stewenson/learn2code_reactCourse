import React, { useState } from 'react'

// assets
import logo from '../assets/logo.svg'

// styles
import './Home.scss'

interface Props {

}

export const Home: React.FC<Props> = () => {
    const [title] = useState('React, whee!')

    return (
        <div className='home'>
            <img className="logo" src={logo} alt="react logo" />
            <h1>{title}</h1>
            <p>
                Not singles in your area. <br/>
                Hotter react in yout&nbsp;
                <a
                    href="https://reactjs.org/docs"
                   target="_blank"
                    rel="noopener noreferrer"
                >
                    documentation
                </a>
            </p>
        </div>
    )
}