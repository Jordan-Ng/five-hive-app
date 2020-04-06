import React, { useState, useEffect } from "react";
import "./App.css";
import "./assets/css/hexagons.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import MyProfilePage from "./pages/MyProfilePage";
import UserProfile from "./pages/UserProfile";
import Challenges from "./pages/Challenges";
import UploadPage from "./pages/UploadPage";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MentorForm from "./components/MentorForm";
import TestHomePage from "./pages/TestHomePage";
import { ChatkitProvider, TokenProvider } from "@pusher/chatkit-client-react";
import Chat from "./pages/Chat";
import ChatUserList from "./pages/ChatUserList";
import Match from "./pages/Match";

import axios from "axios";
import { Route, useHistory, useLocation, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import { ToastContainer, toast } from "react-toastify";
// import Image from "react-graceful-image";

const instanceLocator = "v1:us1:8d826e51-c074-43ba-a02f-7ad846b27f89";

const tokenProvider = new TokenProvider({
  url:
    "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8d826e51-c074-43ba-a02f-7ad846b27f89/token",
});

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isloggedin, setisloggedin] = useState(false); //for login-required content in subsequent pages
  const [usernameInput, setusernameInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [loggedUser, setloggedUser] = useState("");
  const [myinfo, setmyinfo] = useState([]);
  const urlParams = new URLSearchParams(window.location.search);
  const userId = "ridza";
  const otherUserId = "matt";
  const myprofile = useLocation("/myprofile");
  const userprofile = useLocation("/userprofile");

  // initial getting info
  useEffect(() => {
    axios
      .get(`https://fivehive.herokuapp.com/api/v1/users/profile/${loggedUser}`)
      // .get(`http://localhost:5000/api/v1/users/profile/${loggedUser}`)
      .then((result) => {
        setmyinfo(result.data);
        setIsLoading(false);
        console.log("mounted");
      })
      .catch(console.log("cannot render page"));
  }, [loggedUser]);

  // to get user personal info
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     // url: "https://fivehive.herokuapp.com/api/v1/users/info/me",
  //     url: "http://localhost:5000/api/v1/users/info/me",
  //     headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` }
  //   })
  //     .then(result => {
  //       setmyinfo(result.data);
  //       console.log(result.data);
  //     })
  //     .catch(error => console.log(error.response.data));
  // }, [myprofile]);

  // to get other user profiles
  useEffect(() => {
    axios({
      method: "get",
      url: "http://fivehive.herokuapp.com/api/v1/users/info/show",
      // url: "http://localhost:5000/api/v1/users/info/show",
      headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
    })
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userprofile]);

  const handleUser = (e) => {
    setusernameInput(e.target.value);
  };

  const handlePassword = (e) => {
    setpasswordInput(e.target.value);
  };

  let history = useHistory();

  const submitlog = (e) => {
    e.preventDefault();
    if (usernameInput && passwordInput) {
      console.log(`username = ${usernameInput}, password=${passwordInput}`);
      axios({
        method: "POST",
        url: "https://fivehive.herokuapp.com/api/v1/users/signin",
        // url: "http://localhost:5000/api/v1/users/signin",
        data: {
          username: usernameInput,
          password: passwordInput,
        },
      })
        .then((result) => {
          history.push("/main");
          setisloggedin(true);
          setloggedUser(result.data["user_id"]);
          localStorage.setItem("jwt", result.data["jwt"]);
          console.log(localStorage);
          console.log(localStorage["jwt"]);
        })
        .catch((error) => {
          console.log("cannot leh");
        });
    }
  };

  return (
    <div className="App">
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} timeout={1000} classNames="fade">
              <Switch location={location}>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route path="/login">
                  <LoginForm
                    isloggedin={isloggedin}
                    setisloggedin={setisloggedin}
                    usernameInput={usernameInput}
                    setusernameInput={usernameInput}
                    passwordInput={passwordInput}
                    setpasswordInput={setpasswordInput}
                    handleUser={handleUser}
                    handlePassword={handlePassword}
                    submitlog={submitlog}
                  />
                </Route>
                <Route path="/signup">
                  <SignUpForm />
                </Route>
                <Route path="/main">
                  <MainPage
                    loggedUser={loggedUser}
                    myinfo={myinfo}
                    setmyinfo={setmyinfo}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                  />
                </Route>
                <Route path="/nearby">
                  <UserProfile users={users} />
                </Route>
                <Route path="/challenges">
                  <Challenges />
                </Route>
                <Route path="/myprofile">
                  <MyProfilePage
                    loggedUser={loggedUser}
                    myinfo={myinfo}
                    setmyinfo={setmyinfo}
                  />
                </Route>
                <Route path="/userprofile">
                  <UserProfile users={users} setUsers={setUsers} />
                </Route>
                <Route path="/mentor">
                  <MentorForm />
                </Route>
                <Route path="/test">
                  <TestHomePage
                    handleUser={handleUser}
                    handlePassword={handlePassword}
                    submitlog={submitlog}
                  />
                </Route>
                <Route path="/chat">
                  <>
                    <div className="App__chatframe">
                      <div className="App__chatwindow">
                        <ChatkitProvider
                          instanceLocator={instanceLocator}
                          tokenProvider={tokenProvider}
                          userId={userId}
                        >
                          <ChatUserList userId={userId} />
                          <Chat otherUserId={otherUserId} />
                        </ChatkitProvider>
                      </div>
                    </div>
                  </>
                </Route>
                <Route path="/match">
                  <Match />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default App;
