import './App.css';
import {Footer} from './Footer'

const info = require('./info.json')

const App = () => (
    <div className="App">
        <h1>Hello, my name is {info.firstName}</h1>

        <h2>About me:</h2>
        <p>{info.shortBiography}</p>
        <h2>Contacts:</h2>
        <p>{info.Contacts}</p>

        <Footer copyright='C'/>
    </div>
)

export default App;
