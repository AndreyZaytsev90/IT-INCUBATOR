import './logo.svg';
import './App.css';


const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img alt="react"
                     src="data:image/png;base64,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"/>
            </header>
            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">New</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>

            </nav>
            <div className="content">
                <div>
                    <img alt="night" src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png"/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>new post</div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>

            </div>
        </div>
    )
}


export default App;