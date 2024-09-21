import React from 'react'
import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { Analytics } from "@vercel/analytics/react"

const Home = (props) => {

  let navigate = useNavigate();
  const { user } = useUser();
  const accessForms = () => {
    const path = '/forms';
    navigate(path);
  }

  return (
    <>
    <div className='homepage' style={{
      backgroundColor: 'yellowgreen',
    }}>
      <div className="mainContainer">
        <div className={'titleContainer'}>
          <div>Organize Your Purchases</div>
        </div>
        <div>Through this product, you can list out how much you <br /> spent on certain items and have it visualized through a graph
        <br /> Login to start!
        </div>
        {/* The children of the SignedOut component are rendered only when the user is signed out from the app. In this case, the app will render a SignInButton */}
        <SignedOut>
          <SignInButton>
            <input className={'inputButton'} type="button" value={'Log in'} onClick={accessForms} />
          </SignInButton>
        </SignedOut>
        {user ? <>
        <Button onClick={accessForms} variant='contained'>
          click to move to forms
        </Button>
        </>
        : null}
      </div>
    </div>
    < Analytics /> 
    </>
  )
}

export default Home
