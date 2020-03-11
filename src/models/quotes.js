const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for quote
const QuoteSchema = new Schema({
	_id: Schema.Types.ObjectId,
	q_text: String,
	author: String
})

//create model for quote
const Quote = mongoose.model('quote', QuoteSchema);

module.exports = Quote;

