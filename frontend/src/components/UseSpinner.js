import React, { useState } from 'react'
import Loader from './Loader';

function UseSpinner() {
    const [loading, setLoadingState] = useState(false);
    return [
        loading ? <Loader /> : null,
        () => setLoadingState(true), //mostrar spinner
        () => setLoadingState(false), //esconder spinner

    ];
}

export default UseSpinner