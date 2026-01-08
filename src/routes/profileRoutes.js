const router = require('express').Router();
const profileController = require('../controllers/auth/profileController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

/**
 * @openapi
 * /profile:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - Profile
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 */


router.get('/', profileController.getProfile);

/**
 * @openapi
 * /profile:
 *   put:
 *    summary: Update user profile
 *    tags:
 *      - Profile
 *    security:
 *      - bearerAuth: []
 *   responses:
 *    200:
 *    description: User profile updated successfully
 */

router.put('/', profileController.updateProfile);

module.exports = router;