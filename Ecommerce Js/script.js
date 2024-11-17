const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send(`<div>
        <form method ="post">
        <input value = "email" placeholder ="email" />
        <input value = "password" placeholder ="password" />
        <input  value = "Confirmpassword" placeholder ="ConfirmPassword" />
        <button> Sign Up </button>
        </form>
        </div>
        `);
        
})

app.post('/',(req,res)=>{ 
    req.on('data',data => {
        const parsed = data.toString('utf8').split('&');
        const formDta = {};
        for(let pair of parsed){
            const [key,value] =pair.split('=')
            formDta[key] = value;
            console.log(formDta);
        }
    })

    res.send("Account Created Sucessfully")
})

app.listen(3000,()=>{
    console.log('Listening');
})