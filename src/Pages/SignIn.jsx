import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import TopBar from '../Components/Top_bar';
import NavBar from '../Components/Nav_bar';
import Footer from '../Components/Footer';
const SignIn = () => {
    const locate = useHistory()
    const [LogData, setLogData] = useState({email: "", pass: ""});

    let name,
        value;
    const getData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setLogData({
            ...LogData,
            [name]: value
        })
    }
    const postData = async (e) => {
        e.preventDefault();
        const {email, pass} = LogData;
                if (email && pass) {
            const response = await fetch('/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(
                    {email, pass}
                )
            })
            console.log(response.status)
            // const data = await response.json()
            // console.log(data)
            // console.log(data)
            if(response.status === 400) {
                alert("Wrong Crediantial")
            } 
            else{
                locate.push("/dashboard")
            }
        } else {
            alert("Field is Empty")
        }
    }
    return <>
        <TopBar/>
        <NavBar/>
        <section className="min-h-screen flex flex-col">
            <div className="flex flex-1 items-center justify-center">
                <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form className="text-center">
                        <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign in
                        </h1>
                        <div className="py-2 text-left">
                            <input type="email" className="border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700" name='email' placeholder="Email"
                                onChange={getData}/>
                        </div>
                        <div className="py-2 text-left">
                            <input type="password" className=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700" name='pass' placeholder="Password"
                                onChange={getData}/>
                        </div>
                        <div className="py-2">
                            <button type="submit"
                                onClick={postData}
                                className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    {/* <div className="text-center">
        <a href="#" className="hover:underline">Forgot password?</a>
      </div> */}
                    <div className="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to="/register" className="text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</Link>
                    </div>
                </div>
            </div>
        </section>


        <Footer/>


    </>
}

export default SignIn
