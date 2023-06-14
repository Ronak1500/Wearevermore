const mongoose = require("mongoose")

const LahangaSchema = mongoose.Schema({
    title: String,
    url: String,
    asin: String,
    inStock: String,
    inStockText: String,
    brand: String,
    price: {
      value: Number,
      currency: String
    },
    listPrice: {
      value: Number,
      currency: String
    },
    shippingPrice: String,
    stars: Number,
    starsBreakdown: {
      star1: Number,
      star2: Number,
      star3: Number,
      star4: Number,
      star5: Number
    },
    reviewsCount: Number,
    answeredQuestions: Number,
    breadCrumbs: String,
    thumbnailImage: String,
    description: String,
    features: [],
    variantAsins: [],
    reviewsLink: String,
    delivery: String,
    fastestDelivery: String,
    returnPolicy: String,
    support: String,
    variantAttributes: [],
    priceVariants: String,
    seller: String,
    bestsellerRanks: String,
    locationText: String
})

module.exports = mongoose.model("Lahanga", LahangaSchema);