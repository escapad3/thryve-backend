const express = require('express');
const gmapsController = require('../../controllers/gmaps.controller');

const router = express.Router();

router.route('/:searchText').get(gmapsController.searchPlaces);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: gmaps
 *   description: gmaps
 */

/**
 * @swagger
 * /gmaps/{searchText}:
 *   get:
 *     summary: Get autocomplete place predictions for given text.
 *     description: Get autocomplete place predictions for given text.
 *     tags: [gmaps]
 *     parameters:
 *       - in: path
 *         name: searchText
 *         required: true
 *         schema:
 *           type: string
 *         description: Search Text
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/places'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
