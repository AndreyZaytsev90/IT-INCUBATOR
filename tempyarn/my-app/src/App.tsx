import './logo.svg';
import './App.css';
import Header from './components/Header';




const App = () => {
    return (
        <div className="app-wrapper">
            <Header />

            <nav className="nav">
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">New</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>

            </nav>
            <div className="content">
                <div>
                    <img alt="night"
                         src="https://i.pinimg.com/originals/8e/61/ff/8e61ff28302b6fef1057d1b5afb52d3f.png"/>
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
    );
}


export default App;