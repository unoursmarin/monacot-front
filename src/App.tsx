import './App.css';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface UserData {
  name: string;
  website: string;
  email: string;
  phone: string;
}

function App() {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    website: "",
    email: "",
    phone: "",
  });
  const url = "https://jsonplaceholder.typicode.com/users/1";

  useEffect(() => {
    // Fetch user data from the URL
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
      <div className="App">
        <h2>User Data</h2>
        <p>
          <strong>Name: </strong>
          {userData.name || "(Need to populate name here)"}
        </p>
        <p>
          <strong>Website: </strong>
          {userData.website || "(Need to populate website here)"}
        </p>
        <p>
          <strong>Email: </strong>
          {userData.email || "(Need to populate email here)"}
        </p>
        <p>
          <strong>Phone: </strong>
          {userData.phone || "(Need to populate phone here)"}
        </p>
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
