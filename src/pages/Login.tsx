import React from 'react';
import '../App.css'

const Login = () => {
    const submit = (e: any) => {
        e.preventDefault()
    }
    return (
        <div className='login h-screen w-screen flex items-center justify-center'>
            <div>
                <form onSubmit={submit} className='border rounded-3xl'>
                    <div className="logo m-4">
                        <img className='logo w-full p-2 my-3' src="https://img.poorvika.com/common/Poorvika-english-logo.svg" alt="logo" />
                    </div>
                    <div className='details pt-5'>
                        <div className='user flex justify-center '>
                            <input className='no-outline rounded-3xl w-5/6 indent-4 mx-3 py-2' type="text" placeholder='Enter Username' />
                        </div>
                        <div className='pass pt-5 flex justify-center'>
                            <input className=' rounded-3xl w-5/6   h-auto indent-4 mt-3 mx-3 py-2 ' type="password" placeholder='Enter Password' required />
                        </div>
                        <div className='my-4 mx-2 flex justify-center'>
                            <button className="butt w-2/3 text-white  my-5  py-3 px-4 rounded-3xl" type="submit">
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;