import React from 'react';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Page Not Found| Abangane</title>
                <meta name='description' content='Abangane Platforms. Mental Health Champions' />
            </Helmet>
            Page Not Found
        </div>
    )
}

export default Error