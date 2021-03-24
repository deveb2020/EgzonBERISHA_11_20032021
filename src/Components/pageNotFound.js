import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Style/PageNotFound.css'

class PageNotFound extends Component {
    render() {
        return (
            <div className="page-not-found">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
                <div className="return-to-homepage">
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </div>
            </div>
        )
    }
}

export default PageNotFound