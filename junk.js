
// const Header = (props) => {
//   return <h1>Hello {props.username}</h1>
// }
//
// const Layout = (props) => {
//   return <div style={{background: "palegoldenrod"}}>
//     {props.children}
//   </div>
// }
//
// const Login = () => {
//   return <h1>Please Login!</h1>
// }
//
// const isAuthenticated = true;
//
// const LoginButton = () => {
//   return <button className="submit">Login</button>
// }
//
// const LogoutButton = () => {
//   return <button className="submit">Logout</button>
// }
//
// const App = () => {
//   return(
//     <Layout>
//       {isAuthenticated ? (
//         <>
//           <Header username="Siddhanth"/>
//           <LogoutButton/>
//         </>
//       ) : (
//         <>
//           <Login/>
//           <LoginButton/>
//         </>
//       )}<br/><br/>
//       <footer>Copyright 2020</footer>
//     </Layout>
//   );
// }

// const [language, setLanguage] = React.useState('Python');
// const [experience, setExperience] = React.useState(0);
//

// const Person = (props) => {
//   function handleChange() {
//     alert(props.person);
//   }
//
//   return <li onClick={handleChange}>{props.person}</li>;
// return (
//   <div>
//     <input onChange={handleInputChange}/>
//     <h1>{inputValue}</h1>
//   </div>
// );



// () => setDeveloper({
//   language: 'JavaScript',
//   yearsExperience: 0,
// })



//in the return():
// <div style={{margin: 2}}>
// <button onClick={handleToggleEmployment} style={{margin: 2}}>Toggle Employment Status</button>
// <button onClick={handleLanguageChange}>Change Language</button>
// <br/><br/>
// <div>
//   <input type="number"
//   onChange={handleChange}
//   />
// </div><br/>
// <div>
//   <input type="text"
//   onChange={handleNameChange} placeholder="Enter name change here"
//   />
// </div>
// <p>I am learning {developer.language}</p>
// <p>I have {developer.yearsExperience} years of experience</p>
// <p>Emplyement status: {developer.isEmployed ? "Employed" : "Unemployed"}</p>
// <br/><br/>
// <p>X: {mousePosition.x} Y: {mousePosition.y}</p>
// </div>


//before LESSON 3 starts
// const baseUrl = "https://api.github.com/users/";
//
// const App = () => {
//   //const people = ["Sid","Sha","Shu","Sne"];
//   const [developer, setDeveloper] = React.useState({
//     name: '',
//     language: 'python',
//     yearsExperience: 0,
//     isEmployed: false,
//   });
//
//   const [mousePosition, setMousePosition] = React.useState({x: 0, y: 0});
//
//   React.useEffect(() => {
//     document.addEventListener("mousemove",handleMouseMove)
//
//     return () => {
//       document.removeEventListener("mousemove",handleMouseMove);
//     }
//   },[])
//
//   const handleMouseMove = (event) => {
//     setMousePosition({
//       x: event.pageX,
//       y: event.pageY
//     })
//   }
//
//   const [username, setUsername] = React.useState("codeartistryio");
//   const [user,setUser] = React.useState(null);
//   const searchInput = React.useRef();
//
//   React.useEffect(() => {
//     //using aysnc-await
//     getUser();
//     // fetch(baseUrl)
//     //   .then(response => response.json())
//     //   .then(data => setUser(data))
//   },[])
//
//   const handleClearInput = () => {
//     searchInput.current.value = "";
//     searchInput.current.focus();
//   }
//
//   async function getUser() {
//     const response = await fetch(`${baseUrl}${username}`);
//     const data = await response.json();
//     setUser(data);
//   }
//
//
//
//   React.useEffect(() => {
//     document.title = developer.name
//   },[developer.name])
//
//   const handleToggleEmployment = () => {
//       setDeveloper(prevState => ({
//         ...prevState,
//         isEmployed: !prevState.isEmployed
//       }))
//   }
//
//   const handleLanguageChange = () => {
//     setDeveloper({
//       ...developer,
//       language: 'JavaScript'
//     })
//   }
//
//   const handleChange = (event) => {
//     setDeveloper({
//       ...developer,
//       yearsExperience: event.target.value
//     })
//   }
//
//   const handleNameChange = (event) => {
//     setDeveloper({
//       ...developer,
//       name: event.target.value
//     })
//   }
//
//   return (
//   <div>
//     <input type="text"
//     placeholder="input username here"
//     onChange={event => setUsername(event.target.value)}
//     ref={searchInput}
//     />
//     <button onClick={getUser}>Search</button>
//     <button onClick={handleClearInput}>Clear</button>
//     {user ? (
//       <div>
//         <h1>Username: {user.name}</h1>
//         <p>Bio: {user.bio}</p>
//         <img alt="avatar" src={user.avatar_url} style={{height: 50}}/>
//       </div>
//     ) : (<p>Loading...</p>)}
//   </div>
// );
// }
