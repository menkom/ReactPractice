import React from 'react';
import UserList from "./components/UserList";
import RetrieveData from "./components/RetrieveData";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <RetrieveData/>
            <UserList/>
        </div>
    );
}

export default App;
