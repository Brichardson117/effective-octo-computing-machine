const router = require('express').Router();
const { addThoughts, addReaction, removeReaction, removeThoughts } = require('../controller/thoughts-controllers');

router.route('/:userId').post(addThoughts);

router
.route('/:userId/:thoughtID')
.put(addReaction)
.delete(removeThoughts)

router.route('/:userId/:commentId/:replyId').delete(removeReaction)