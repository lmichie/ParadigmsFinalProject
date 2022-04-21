// import { Router } from "express";

const { Router } = require('express');

const { getLikesCtl, incrementLikesCtl } = require('../controllers/likes');

const router = Router();

router.post('/getLikes', getLikesCtl);
router.post('/incrementLikes', incrementLikesCtl);

module.exports = router;