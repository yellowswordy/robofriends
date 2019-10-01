import React from 'react'
import {robots} from "./Robots";
import CardList from "./CardList";
import SearchBox from "./SearchBox";


const App = () => {
    return (
        <div className='tc'>
            <h1>Robofriends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>

    )
};



export default App;