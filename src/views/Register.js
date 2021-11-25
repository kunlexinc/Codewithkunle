import React, { useState } from "react";
import { Form, Input, Button } from 'antd';
import { collection,addDoc } from "firebase/firestore"
import Swal from 'sweetalert2'


//import flutterwave component
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

//import firebase db
import {db} from "../components/home/utils/firebase-config";

require("dotenv").config()



function AppRegister() {

    
let [fname, setFname] = useState("")
 
let [lname, setLname] = useState("")
let [phone, setPhone] = useState("")
let [email, setEmail] = useState("")
// const [password, setPassword] = useState("")
// const [cpassword, setCpassword] = useState("")


const userCollectRef = collection(db,"user")
// const priceCollectRef = collection(db,"price")

//function for flutterwave request
const callPayment = async(e)=>{
  // await getDoc(priceCollectRef,(res)=>{
  //   console.log(res)
  // })
	e.preventDefault()
	
	  handleFlutterPayment({
		callback: (response) => {
			createUser(response)
		   console.log(response);
			closePaymentModal() // this will close the modal programmatically
		},
		onClose: () => {},
	  });
	  
}

const createUser = async(response) =>{
	

	await addDoc(userCollectRef,{
		Firstname:fname,
		lastname:lname,
		phone:phone,
		email:email,
		// password:password,
		dateCreated: Date(),	
		paymentData:{
		amount: response.amount,
		currency:response.currency,
		flw_ref:response.flw_ref,
		status:response.status,
		transaction_id: response.transaction_id,
		tx_ref: response.tx_ref
		}	
		
	})
	
	setFname(' ')
	setLname(' ')
	setPhone('  ')
	setEmail('')
	// setPassword('')
	// setCpassword('')



  Swal.fire({
    icon: 'success',
    title: 'Congratulations!',
    text: 'You can now chat or call 07068790872',
    footer: '<a href="/">Do you have a question?</a>'
  })

	console.log("done")

}

//Code for flutterwave
const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUBLIC,
    tx_ref: Date.now(),
    amount: 100000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phonenumber:`${phone}`,
      name: fname + " " + lname,
    },
    customizations: {
      title: 'CodeWithKunle',
      description: 'Payment for items in cart',
      logo: 'https://codewithkunle.herokuapp.com/static/media/logo1.75551d2a.png',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);






    return(
        <div id="contact" className="block contactBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Register And Pay</h2>
            <p>Fill the form, and proceed to payment</p>
          </div>
          <Form
            name="normal_login"
            
            className="login-form"
            initialValues={{ remember: true }}
            
          >
            <Form.Item
              name="firstName"
              rules={[
                { 
                  required: true,
                  message: 'Please enter your first name!' 
                }]
              }
            >
              <Input onChange={(e) => setFname(e.target.value)} value={fname} placeholder="First Name" />
            </Form.Item>

            <Form.Item
              name="SurName"
              rules={[
                { 
                  required: true,
                  message: 'Please enter your surname!' 
                }]
              }
            >
              <Input onChange={(e) => setLname(e.target.value)} value={lname} placeholder="Surname" />
            </Form.Item>




            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input onChange={(e) => setEmail(e.target.value)}  value={email} placeholder="Email Address"/>
            </Form.Item>
            <Form.Item
              name="telephone"
            >
              <Input onChange={(e) => setPhone(e.target.value)}  value={phone} placeholder="Telephone" />
            </Form.Item>
            
           
            
            <Form.Item>
              <Button  onClick={callPayment} type="primary" htmlType="submit" size="large" className="login-form-button">
                Proceed To Payment
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>  
     
    )
    
}

export default AppRegister;