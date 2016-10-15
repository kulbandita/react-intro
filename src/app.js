import React from 'react'
import ReactDOM from 'react-dom'

const title = 'My React App'

const App = () => {
    return <div>My Reac App</div>
}

const element = document.getElementById('app');
ReactDOM.render(<App />, element);