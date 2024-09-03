const express=require('express');
const router =express.Router();
const details=require("../../db/Schema/restaurantSchema")

router.get("/", async (req, res) => {
    try {
        const queryParams = req.query;
        const filters = {};


        if (queryParams.restaurant_name) {
            filters.restaurant_name = {
                $regex: `^${queryParams.restaurant_name}`,
                $options: "i", 
            };
        }

        if (queryParams.place) {
            filters.place = queryParams.place;
        }
        const Details = await details.find(filters);
        res.json(Details);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/",async(req,res)=>{
    try{
    const restaurantData=req.body;
    const newData=new details(restaurantData);
    await newData.save();
    res.json({
        message:"Details added successfully"
    });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})
router.put("/:id",async(req,res)=>{
    try{
        const restaurantId=req.params.id;
        const updaterestaurantData=req.body;
        await details.findByIdAndUpdate(restaurantId,updaterestaurantData);
        res.json({
            message:"Details updated successfully",
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})
router.delete("/:restaurant_name",async(req,res)=>{
    try{
        const name=req.params.restaurant_name;
        const DeleteRestaurantData=req.body;
        await details.findOneAndDelete(name,DeleteRestaurantData);
        res.json({
            message:"Details Deleted successfully",
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })

    }
})


module.exports=router;