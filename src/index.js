import React from 'react';
import ReactDOM from 'react-dom';

const baseUrl = "https://api.github.com/users/";

const App = () => {
  //const people = ["Sid","Sha","Shu","Sne"];
  const [developer, setDeveloper] = React.useState({
    name: '',
    language: 'python',
    yearsExperience: 0,
    isEmployed: false,
  });

  const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});

  React.useEffect(() => {
    document.addEventListener("mousemove",handleMouseMove)

    return () => {
      document.removeEventListener("mousemove",handleMouseMove);
    }
  },[])

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const [username, setUsername] = React.useState("codeartistryio");
  const [user,setUser] = React.useState(null);
  const searchInput = React.useRef();

  React.useEffect(() => {
    //using aysnc-await
    getUser();
    // fetch(baseUrl)
    //   .then(response => response.json())
    //   .then(data => setUser(data))
  },[])

  const handleClearInput = () => {
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }



  React.useEffect(() => {
    document.title = developer.name
  },[developer.name])

  const handleToggleEmployment = () => {
      setDeveloper(prevState => ({
        ...prevState,
        isEmployed: !prevState.isEmployed
      }))
  }

  const handleLanguageChange = () => {
    setDeveloper({
      ...developer,
      language: 'JavaScript'
    })
  }

  const handleChange = (event) => {
    setDeveloper({
      ...developer,
      yearsExperience: event.target.value
    })
  }

  const handleNameChange = (event) => {
    setDeveloper({
      ...developer,
      name: event.target.value
    })
  }

  return (
  <div>
    <input type="text"
    placeholder="input username here"
    onChange={event => setUsername(event.target.value)}
    ref={searchInput}
    />
    <button onClick={getUser}>Search</button>
    <button onClick={handleClearInput}>Clear</button>
    {user ? (
      <div>
        <h1>Username: {user.name}</h1>
        <p>Bio: {user.bio}</p>
        <img alt="avatar" src={user.avatar_url} style={{height: 50}}/>
      </div>
    ) : (<p>Loading...</p>)}
  </div>
);
}
const rootNode = document.getElementById("root");
ReactDOM.render(<App/>,rootNode);

const NewPage = () => <div>New Page</div>

//setTimeout(() => ReactDOM.render(<NewPage/>, rootNode),2000)
