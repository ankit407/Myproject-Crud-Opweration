const express = require('express');
const cors = require("cors");

require('./conn');
// const process = require('./twowheeler');
const Register = require('./product');
//const  = require('express/lib/application');


const app = express();
app.use(express.json());


const corsOptions = {
    origin: "http://localhost:3000/"
};
const corsOpts = {
    origin: '*',

    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],

    allowedHeaders: [
        'Content-Type',
    ],
};

app.use(cors(corsOpts));

app.get('/', async (req, res) => {
    let data = await Register.find();
    res.send(data);
});

app.post('/signup', async (req, res) => {
    const password = req.body.password;
    const c_password = req.body.c_password;
    try {
        if (password == c_password) {
            let r = new Register({
                f_name: req.body.f_name,
                l_name: req.body.l_name,
                email: req.body.email,
                contact: req.body.contact,
                password: req.body.password,


            })
            r = await r.save()
            console.log(r);
            res.send({ Message : "Information successful" });
        }
        else {
            res.send("pass does not match");
        }
    }
    catch (error) {
        res.send({ error: error });
    };
});
app.post('/login', async (req, res) => {
    try {
        const E = req.body.E;
        const pass = req.body.password;

        let data = await Register.findOne({ email: E, password: pass });
        console.log(data);
        if (data) {
            res.send("Successfully login");
        }
        else {
            res.status().send({ error: "wrong information" });

        }
    }
    catch (error) {
        res.status(200).send({ error: "Invalid login datails" });
    }
});

app.put('/update/:_id', async (req, res) => {
    console.log(req.params);
    let data = await Register.updateOne(req.params, {
        $set:
        {
            f_name: req.body.f_name,
            l_name: req.body.l_name,
            email: req.body.email,
            contact: req.body.contact,
        },
    })
    res.send(data);
});

app.post('/addproduct', async (req, res) => {
    try {
        const r = process({
            Brand: req.body.Brand,
            price: req.body.price,
            color: req.body.color,
            descripition: req.body.descripition,
            quantity: req.body.quantity,
        });
        let data = await r.save();
        console.log(data);
        res.send("Succesfully added");
    }
    catch (error) {
        res.send({ error: error });
    }
});

app.get('/searchproduct', async (req, res) => {
    let data = await process.find({ Brand: { $regex: req.body.Brand } })
    res.send(data);
    console.log(data)
});

app.get('/searchUser', async (req, res) => {
    console.log(req.body.f_name)
    let data = await Register.find(
        {
            '$or': [
                { f_name: { $regex: req.body.Search } },
                { l_name: { $regex: req.body.Search } },
                { email: { $regex: req.body.Search } },
                { contact: { $regex: req.body.Search } }
            ],

        });
    res.send(data);
    console.log(data);
});

app.delete('/delete/:id', async (req, res) => {
      try{
           const data = await Register.findByIdAndDelete({_id: req.params.id });
           if(!req.params.id){
           return res.status(404).send();
           }
           res.send({Message : "Successfully Deleted"});
            console.log(data);
}
 catch(error){
              res.send(error);
}
    
});

app.put("/changepassword", async (req, res) => {
    let E = req.body.email;
    let pass = req.body.password;
    let new_pass = req.body.new_password;
    let c_pass = req.body.con_password;


    if (new_pass == c_pass) {
        let data = await Register.findOne({
            email: E,
            password: pass,
        })

        if (data) {
            console.log(data);
            let result = await Register.updateOne({ id: data._id }, {
                $set: { password: new_pass }

            });
            res.send("password  changed successfully");
            console.log(data);
        }
        else {
            res.send("Invalid Old Password");
        }
    }
    else {
        res.send("Password and Confirm Password Mismatch");
    }
});

app.get('/User/:id', async (req, res) => {
    try {
          const data = await Register.findById({ _id: req.params.id });
          if (!req.params.id) {
          res.status(200).send();
         }
          res.send( data)
          console.log(data);
        }
           catch (error) {
           res.send(error);
        }

   });

app.listen(4000);
console.log("I am listening server 4000");