import {Router} from 'express';
import { food_items_list } from '../data';

const router = Router();

router.get('/', (req,res)=>{
    res.send(food_items_list)
});

router.get('/search/:searchTerm', (req,res)=>{
    const searchTerm = req.params.searchTerm;
    const foods =  food_items_list.filter(food=> food.name.toLowerCase()
    .includes(searchTerm.toLowerCase()))
    res.send(foods)
});

router.get('/food/:id', (req,res)=>{
    const id = req.params.id;
    const food =  food_items_list.find(food=>food.id==id);
    res.send(food)
});

export default router