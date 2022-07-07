import React,{useState} from 'react'
import {Link,useHistory} from "react-router-dom"
import Footer from '../Components/Footer'
import NavBar from '../Components/Nav_bar'
import TopBar from '../Components/Top_bar'

const Register =()=>{
  const history = useHistory()
const [RegData, setRegData] = useState({
  fname:"",
  lname:"",
  email:"",
  pass:"",
  cpass:"",
  productImage:""
});
let name,value;
const getData=(event)=>{
  name=event.target.name;
  value=event.target.value;
  setRegData({...RegData,[name]:value})
}
const getImage=(event)=>{
  name=event.target.name;
  value=event.target.files[0];
  // console.log(value);
  setRegData({...RegData,[name]:value})
}
const postData=async(e)=>{
  e.preventDefault();
  const {fname,lname,email,pass,cpass,productImage} =RegData;
  if(email && fname && lname && pass && pass===cpass){
    

      console.log(RegData)
      const res= await fetch('/user',
      {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        },
        body:JSON.stringify({
          fname,
          lname,
          email,
          pass,
          productImage
        })}
        )
        if(res){
          console.log(res)
          alert("Successfully Email Recieved! Thanks For your submitting");
          setRegData({
            fname:"",
            lname:"",
            pass:"",
            cpass:"",
            email:""
          })
          if(res.status ===200){
              history.push("/dashboard")
          }

        }
        else{
          alert("Sorry their is a server issue ! Please Try it again ")
        }
      }else{
        alert("Field is Empty")
      } 
}
  
    return <>
    <TopBar />
    <NavBar />
{/* component */}
{/* Container */}
<div className="container mx-auto">
  <div className="flex justify-center px-6 my-12">
    {/* Row */}
    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
      {/* Col */}
      <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{backgroundImage: 'url("https://source.unsplash.com/Mv9hjnEUHR4/600x800")'}} />
      {/* Col */}
      <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
        <form method='POST' className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                First Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" 
              name='fname' value={RegData.fname} onChange={getData}
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                Last Name
              </label>
              <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name"
              name='lname' value={RegData.lname} onChange={getData} />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
            </label>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" 
              name='email' value={RegData.email} onChange={getData}
            />
          </div>
          <div className="mb-4 md:flex md:justify-between">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" 
               name='pass' value={RegData.pass} onChange={getData}
              />
              {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Confirm Password
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" placeholder="******************"
                name='cpass' value={RegData.cpass} onChange={getData}
              />
            </div>
            
          </div>
          <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
                Profile Image
              </label>
              <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="file" name='productImage' onChange={getImage}
              />
            </div>
          <div className="mb-6 text-center">
            <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button" onClick={postData}>
              Register Account
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="#">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center">
            <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="./index.html">
              Already have an account? Login!
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
}

export default Register