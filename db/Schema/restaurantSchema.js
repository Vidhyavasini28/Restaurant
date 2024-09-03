const mongooese = require("mongoose");

const restaurantSchema = new mongooese.Schema({
    restaurant_name: {
        type: String,
        required: true,
        unique:true,
    },
    place: {
        type: String,
        required: true,
        unique:true,
    },
    grade: {
    type: String,
    required: true,
    },
    
});

const restaurant = mongooese.model("Restaurant-details", restaurantSchema);

module.exports = restaurant;