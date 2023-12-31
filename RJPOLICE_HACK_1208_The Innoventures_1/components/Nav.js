import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("User");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {
        <img
          alt="logo"
          className="logo"
          src="https://imgs.search.brave.com/yZfTB4EHRK5aiM0QFHXCtT5Z0jXaNT6XLbSF9QDGHQw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvYy9jNC9SYWph/c3RoYW5fUG9saWNl/X0xvZ28ucG5nL3Jl/dmlzaW9uL2xhdGVz/dD9jYj0yMDIwMDMz/MDA2Mjc0OQ.jpeg"
        />
      }
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Feedback</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Nav = () => {
//   const auth = localStorage.getItem('user');
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate('/signup');
//   };

//   // Check if 'auth' is defined before parsing
//   const user = auth ? JSON.parse(auth) : null;

//   return (
//     <div>
//       <img
//         alt='logo'
//         className='logo'
//         src='https://imgs.search.brave.com/yZfTB4EHRK5aiM0QFHXCtT5Z0jXaNT6XLbSF9QDGHQw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L2xv/Z29wZWRpYS9pbWFn/ZXMvYy9jNC9SYWph/c3RoYW5fUG9saWNl/X0xvZ28ucG5nL3Jl/dmlzaW9uL2xhdGVz/dD9jYj0yMDIwMDMz/MDA2Mjc0OQ.jpeg'
//       />

//       {user ? (
//         <ul className='nav-ul'>
//           <li>
//             <Link to='/'>Products</Link>
//           </li>
//           <li>
//             <Link to='/add'>Add Products</Link>
//           </li>
//           <li>
//             <Link to='/update'> Update Products</Link>
//           </li>
//           <li>
//             <Link to='/profile'>Profile</Link>
//           </li>
//           <li>
//             <Link onClick={logout} to='/signup'>
//               Logout ({user.name})
//             </Link>
//           </li>
//         </ul>
//       ) : (
//         <ul className='nav-ul nav-right'>
//           <li>
//             <Link to='/signup'>Sign Up</Link>
//           </li>
//           <li>
//             <Link to='/login'>Login</Link>
//           </li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Nav;
