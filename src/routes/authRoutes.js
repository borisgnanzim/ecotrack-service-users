const router = require('express').Router();
const authController = require('../controllers/auth/authController');

/**
 * @openapi
 * /login:
 *   post:
 *     summary: Authentifie un utilisateur et génère un token JWT
 *     tags:
 *       - Authentification
 *     responses:
 *       200:
 *         description: Utilisateur authentifié avec succès
 */
router.post('/login', authController.login);

/**
 * @openapi
 * /register/citizen:
 *   post:
 *     summary: Enregistre un citoyen
 *     tags:
 *       - Authentification
 *     responses:
 *       200:
 *         description: Citoyen enregistré avec succès
 */
router.post('/register/citizen', authController.registerCitizen);

module.exports = router;
