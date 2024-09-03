require("dotenv").config();
const express =require ("express");

const restaurantRoutes=require("./router/RestaurantDetails/Details")
const db=require("./db/index")

const app = new express();

const port =process.env.PORT || 8080;
db();

app.use(express.json()); 
app.use("/Details",restaurantRoutes);

app.listen(port,()=>{
    console.log(`Express app listening at http://localhost:${port}`)
})
