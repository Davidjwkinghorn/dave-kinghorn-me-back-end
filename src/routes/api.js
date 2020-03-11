const express = require ('express');
const router = express.Router();

router.get('/quotes', (req, res, next) => {
	Quote.find({}, 'q_text', 'author')
	.then(data => res.json(data))
	.catch(next)
});

router.post('/quotes', (req, res, next) => {
	if (req.body.q_text && req.body.author) {
		Quote.create(req.body)
		.then(data => res.json(data))
		.catch(next)
	} else {
		res.json({
			error: "Quotes need text and an author."
		})
	}
});

router.delete('/quotes/:id', (req, res, next) => {
	Quote.findOneAndDelete({"_id": req.params.id})
	.then(data => res.json(data))
	.catch(next)
});

module.exports = router;

