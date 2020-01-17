import { Router } from 'restify-router'
import user from './user'
/* ENDPOINT_ROUTER_IMPORT */
import message from './message'
import auth from './auth'

const router = new Router()

/**
 * @apiDefine admin Admin access only
 * You must pass `token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine master Frontend action access only
 * You must pass `masterkey` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=100] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

/* ENDPOINT_ROUTER_EXPORT */
router.add('/messages', message)
router.add('/users', user)
router.add('/auth', auth)


export default router
