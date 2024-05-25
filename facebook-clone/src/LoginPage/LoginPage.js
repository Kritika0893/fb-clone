import React from 'react'
import "./LoginPage.css"

 function LoginPage() {
  return (

    <div className='Login'>
        <div className='facebook'>
        <div className='facebooktext'>
            facebook
        </div>
        <div className='title'>
            Facebook helps you connect and share <br></br>with the people in your life
        </div>

            </div>
            <div className='logincontainer'>
                <div className='logindetail'>
                    <input type="email" placeholder='Enter your email'/>
                        

                    <br></br>
                    <input type="password" placeholder='Enter password'/>
                        

                    
                    <br></br>
                    <button className='btn'>
                        Login
                    </button>
                </div>
                <div className='forget'>
                    <a href='forget'>Forgotten password</a>
                    <br></br>
                    <button className='btns'>
                        Create new account
                    </button>
                </div>
                <p></p>
                <br></br>
                <div className='page'>
                    <a href="createpage">Create a page</a>for a celebrity.
                </div>
            </div>
            </div>
  )
}
export default LoginPage
