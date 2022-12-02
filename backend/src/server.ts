import express, { json } from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import { food_items_list, sample_users } from "./data";

const app = express()
app.use(express.json());
app.use(cors({
    credentials: true,
    origin:['http://localhost:4200']
}));

app.get('/api/foods', (req,res)=>{
    res.send(food_items_list)
});

app.get('/api/foods/search/:searchTerm', (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods =  food_items_list.filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
    res.send(foods)
});

app.get('/api/foods/food/:id', (req,res)=>{
    const id = req.params.id;
    const food =  food_items_list.find(food=>food.id==id);
    res.send(food)
});

app.post("/api/users/login", (req,res)=>{
    const { email, password } = req.body;
    const user = sample_users.find(user=> user.email===email && user.password===password)
    if(user){
        res.send(generateTokenResponse(user));
    } else{
        res.status(400).send('No Account was registered on the given credentials.!')
    }
});

const generateTokenResponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "SomeRandomText",{
        expiresIn:'30d'
    });
    user.token = token;
    return user;
}

const port = 5000;
app.listen(port, ()=>{
    console.log('Website will be served on http://localhost:' + port)
});