import React,{useState} from 'react'

const AddNew =()=>{
const [product, setproduct] = useState({
    name:"",
    category:"",
    sub:"",
    desc:"",
    contract:"",
    procedure:"",
    delivery:"",
    location:"",
    origin:"",
    price:"",
    payterm:"",
    buysell:"" , 
});
let name,value;
const getData=(event)=>{
  name=event.target.name;
  value=event.target.value;
  setproduct({...product,[name]:value})
}
const postData=async(e)=>{
  e.preventDefault();
  const {name,category,sub,desc,contract,procedure,delivery,location,origin,price,payterm,buysell} =product;
  console.log(product)
  if(name && category && sub&&desc&&contract&&procedure&&delivery&&location&&origin&&price&&payterm&&buysell){
      const res= await fetch('http://localhost:4000/product',
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,category,sub,desc,contract,procedure,delivery,location,origin,price,payterm,buysell 
        })}
        )
        if(res){
          console.log(res)
          alert("Successful Email Recieved! Thanks For your submitting");
          setproduct({
            name:"",
            category:"",
            sub:"",
            desc:"",
            contract:"",
            procedure:"",
            delivery:"",
            location:"",
            origin:"",
            price:"",
            payterm:"",
            buysell:"" ,
          })
        }
        else{
          alert("Sorry their is a server issue ! Please Try it again ")
        }
      }else{
        alert("Field is Empty")
      } 
}
    return<>
<div className="text-white bg-blue-400 flex flex-shrink-0 flex-col">
      <div className="flex relative items-center p-4 h-12">
        <span className="text-2xl tracking-wide">ADD NEW PRODUCT TO LIST</span>
      </div>
    </div>
    {/*Add new product*/}
 <div>
  {/* component */}
  <div className="h-screen">
    <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
      
      <div className="rounded-md">
        <form id="payment-form" method="POST" action>
          <section>
            <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">Product Information</h2>
            <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
              <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                <span className="text-right px-2 mr-2">Name of product</span>
                <input name="name" className="focus:outline-none px-4" placeholder="Try Odinsson" required value={product.name} onChange={getData} />
              </label>
              <label className="flex border-b border-gray-200 w-96 py-3 items-center">
                <span className="text-right px-2 mr-2">Description</span>
                <textarea name="desc" className="focus:outline-none px-3" 
                value={product.desc} onChange={getData}
                required />
              </label>
              <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                <span className="text-right px-2 mr-2">Categories</span>
                <div id="country" className="focus:outline-none px-4 w-full flex items-center">
                  <select name="category" 
                  value={product.category} onChange={getData} 
                  className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                  <option value="none">--Select---</option>
                    <option value="Future">Futures & Option</option>
                    <option value="OTC">OTC & Physical</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </label>
              <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                <span className="text-right px-2 mr-2">SubCategories</span>
                <div id="country" className="focus:outline-none px-4 w-full flex items-center">
                  <select name="sub" value={product.sub} onChange={getData} className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none">
                  <option value="none">---select---</option>
                    <option value="Agr">Agriculture</option>
                    <option value="cred">Credit</option>
                    <option value="Digi">Digital Assets</option>
                    
                  </select>
                </div>
              </label>
              <label className="flex border-b border-gray-200 h-12 py-4 items-center">
                <span className="text-right px-2 mr-2">Contract Size</span>
                <input name="contract" className="focus:outline-none px-4" placeholder="100 fine troy ounces " value={product.contract} onChange={getData}/>
              </label>
              <label className="flex border-b border-gray-200 h-12 py-4 items-center">
                <span className="text-right px-2 mr-2">Procedure</span>
                <input name="procedure" className="focus:outline-none px-3" placeholder="Procedure" value={product.procedure} onChange={getData}/>
              </label>
              <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                <span className="text-right px-2 mr-2">Delivery</span>
                <div id="country" className="focus:outline-none px-4 w-full flex items-center">
                  <select name="delivery" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                  value={product.delivery} onChange={getData}>
                  <option value="none">---select---</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    
                  </select>
                </div>
              </label>
             
              <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                <span className="text-right px-2 mr-2">Location</span>
                <div id="country" className="focus:outline-none px-4 w-full flex items-center">
                  <select name="location" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                  value={product.location} onChange={getData}>
                  <option value="none">---select---</option>
                    <option value="AU">Australia</option>
                    <option value="BE">Belgium</option>
                    <option value="BR">Brazil</option>
                    <option value="CA">Canada</option>
                    <option value="CN">China</option>
                    <option value="DK">Denmark</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="HK">Hong Kong</option>
                    <option value="IE">Ireland</option>
                    <option value="IT">Italy</option>
                    <option value="JP">Japan</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MX">Mexico</option>
                    <option value="NL">Netherlands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="SG">Singapore</option>
                    <option value="ES">Spain</option>
                    <option value="TN">Tunisia</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </label>
              <label className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                <span className="text-right px-2 mr-2">Origin</span>
                <div id="origin" className="focus:outline-none px-4 w-full flex items-center">
                  <select name="origin" className="border-none bg-transparent flex-1 cursor-pointer appearance-none focus:outline-none"
                  value={product.origin} onChange={getData}>
                  <option value="none">---select---</option>
                    <option value="AU">Australia</option>
                    <option value="BE">Belgium</option>
                    <option value="BR">Brazil</option>
                    <option value="CA">Canada</option>
                    <option value="CN">China</option>
                    <option value="DK">Denmark</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="HK">Hong Kong</option>
                    <option value="IE">Ireland</option>
                    <option value="IT">Italy</option>
                    <option value="JP">Japan</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MX">Mexico</option>
                    <option value="NL">Netherlands</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="SG">Singapore</option>
                    <option value="ES">Spain</option>
                    <option value="TN">Tunisia</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                  </select>
                </div>
              </label>
              <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-4 mr-2">Price<b>$</b></span>
              <input name="price" className="focus:outline-none px-3 w-full" placeholder="Amount is Dollar" required 
                  value={product.price} onChange={getData}
              />
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-4 mr-2">PaymentTerm</span>
              <input name="payterm" className="focus:outline-none px-3 w-full" placeholder="payment term" required value={product.payterm} onChange={getData}/>
            </label>
            <label className="flex border-b border-gray-200 h-12 py-3 items-center">
              <span className="text-right px-4 mr-2">BUY/SELL</span>
              <input name="buysell" className="focus:outline-none px-3 w-full" placeholder="BUY" required value={product.buysell} onChange={getData}/>
            </label>
            </fieldset>
          </section>
      <button className="submit-button px-4 py-3 rounded-full bg-blue-800 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" onClick={postData} type="submit">
        Submit
      </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
}
export default AddNew