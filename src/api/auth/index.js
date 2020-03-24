import { Router } from 'restify-router'
import { authenticate } from './controller'
import { masterman } from '@/services/guard'

// import { model, modelProjection } from './model'

/**
 * Serve resources with fine grained mapping control
 */

const router = new Router()

/**
 * @api {post} /auth User Authentication
 * @apiName CreateMessage
 * @apiGroup Authentication
 * @apiPermission user
 * @apiParam {String} email User's username.
 * @apiParam {String} password User's password.
 * @apiParam {String} token admin access token.
 * @apiSuccess {Object} user User's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 User not found.
 * @apiError 401 Master access only.
 */
router.post('', masterman(), authenticate)


export default router

