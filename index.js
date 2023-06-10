const fast2sms = require('fast-two-sms');
const dotenv = require('dotenv');
dotenv.config();
var a = Math.floor(1000 + Math.random() * 9000);
var numbers = "9565671751";

const options = {
    authorization: process.env.OTP_Authorization,
    message: `Hi User
    this OTP is send by sushrut pandey for your account varification
    your OTP is ${a}
    valid from 2 min.`,
    numbers :[`${numbers}`],
    // message: "hey buddy how are you 65675",
    // numbers:['9565671751']
};

fast2sms.sendMessage(options) 

.then((response)=>{
    
    console.log(response)

    if(response){
        console.log("Some thing went wrong to Send a OTP",response)
    }else{
        console.log('Your OTP send Successfully',options)
    }
})
.catch((error)=>{
    console.log(error)
})

// try{
//     console.log("Your Otp will be send on this number", options)
// }catch(error){

//     console.log(error);
// }

