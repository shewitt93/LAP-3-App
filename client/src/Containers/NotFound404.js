import React from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/notFound404.css'

const NotFound404 = props => {
    return (

        <>
        <div className = 'notFoundContainer'>
        <h2 className="title">Oops!</h2>
        <button onClick={props.history.goBack}>Back</button>
        <section className="nope">
            <p>Oops, what's happened here? <br /> We don't have a page called { props.location.pathname }!</p>
        </section>
        </div>
        </>
    );
}

export default withRouter(NotFound404);