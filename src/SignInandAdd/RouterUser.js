import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SignIn from './SignIn';
import AddUser from './AddUser';

export default function RouterUser(props) {
  // 👇️ make sure to use your Links ONLY within a <Router> context
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Sign In</Link>
            </li>
            <li>
              <Link to="/about">Create Account</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/about" element={<AddUser />} />
        <Route path="/" element={<SignIn setIsLoggedIn={props.setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <div>Home page</div>;
}

function About() {
  return <div>About page</div>;
}