import {React, useState} from 'react';

const Login = ()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username==='user' && password==='password'){
            setIsLoggedIn(true);
        }
        else{
            setIsInvalid(true)
        }
    }
    return (
        <>
            <h1>Login Page</h1>
            {!isLoggedIn?(
                <>
                {isInvalid?(
                <p>Invalid username or password</p>
            ):(<></>)}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                <input type="text" required value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
                </div>
                
            <div><label>Password:</label>
            <input type="password" required value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
            
            <button type="submit">Submit</button>
            </form>
            </>
            ):
            (
                <p>Welcome, user!</p>
            )}
            
        </>
    )
}

export default Login;