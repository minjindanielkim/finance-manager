import React from 'react'
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Home = (props) => {

  let navigate = useNavigate();
  const { user } = useUser();
  const accessForms = () => {
    const path = '/forms';
    navigate(path);
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
      <SignedOut>
        <SignInButton>
          <input className={'inputButton'} type="button" value={'Log in'} onClick={accessForms} />
        </SignInButton>
      </SignedOut>

      {/* The children of the SignedIn component are rendered only when the user is signed in. In this case, the app will render the SignOutButton */}
      {/* <SignedIn>
        <SignOutButton>
          <input className={'inputButton'} type="button" value={'Log out'} />
        </SignOutButton>
      </SignedIn> */}

      {/* You can also check if a user is logged in or not using the 'user' object from the useUser hook. In this case, a non-undefined user object will render the user's email on the page */}
      {user ? <>
      <Button onClick={accessForms} variant='contained'>
        click to move to forms
      </Button>
      </>
      : null}
    </div>
  )
}

export default Home