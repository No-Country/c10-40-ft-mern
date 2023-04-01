const router = require('express').Router()

const userServices = require('./users.services')
const passport = require('../middlewares/auth.middleware')

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postNewUser)

router.get('/me', passport.authenticate('jwt', {session: false}), userServices.getMyUser)
router.patch('/me', passport.authenticate('jwt', {session: false}), userServices.patchMyUser)
router.delete('/me', passport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

//? /api/v1/users/me

router.get('/:id', userServices.getUserById)
router.patch('/:id', userServices.patchUser)
router.delete('/:id', userServices.deleteUser)

module.exports = router