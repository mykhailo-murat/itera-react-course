import './App.css';
import {Footer} from './Footer'
import {AppHeading} from "./Heading";

const info = require('./info.json')

const App = () => (
    <div className="App">

        <div className="main-content">

            <h1>Hello, my name is {info.firstName}</h1>

 {/*HOW TO PASS INFO FROM JSON ??*/}
 {/*           <AppHeading class="h1" text="Hello, my name is {info.firstName}"/>*/}

            <AppHeading class="h2" text="About me:" />
            <p>{info.shortBiography}</p>

            <AppHeading class="h2" text="Contacts:" />
            <p>{info.Contacts}</p>

        </div>

        <Footer copyright='Copyright ©2022'/>

    </div>
)

export default App;
