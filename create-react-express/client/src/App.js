import React from "react";
import axios from "axios";
import StudentList from "./components/studentList";


function App() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Fast-Track</a>
            </nav>
            <StudentList></StudentList>
        </div>
    );
}

export default App;
