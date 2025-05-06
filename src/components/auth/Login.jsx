import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let formSubmitted=(e)=>{
        e.preventDefault()
        
        console.log(email)
        console.log(password)

        setEmail('')
        setPassword('')
    }

  return (
    <>
        <h1 className='m-10'>Login</h1>
        <div className='border-2 border-slate-700 rounded-lg p-20 inline-block absolute left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2'> 
            <form 
            onSubmit={(e)=>{
                    formSubmitted(e)
                }

            }
            action="" className='flex justify-center items-center flex-col gap-7'>
                <input
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className='border-2 border-slate-700' placeholder='Enter your Email' type="email" name="" id="" 
                />
                <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className='border-2 border-slate-700' placeholder='Enter Password' type="password" name="" id="" 
                />
                <button className='px-8 py-4 text-xl rounded-2xl bg-slate-700'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Login
