import './App.css';

import Header from "./components/Header";
import Clock from "./components/Clock";

function App() {
    return (
        <div className="center">
            <Header />
            <Clock city="Manaus" utc={0} />
            <Clock city="Brasília" utc={1} />
            <Clock city="Tóquio" utc={13} />
            <Clock city="Londres" utc={4} />
        </div>
    );
}
    
export default App;
