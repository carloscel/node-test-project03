const {Router} = require('express');
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/user.controllers');

const router = Router();

  router.get('/:id', usersGet);

  router.post('/', usersPost);

  router.put('/', usersPut);

  router.delete('/', usersDelete);

module.exports = router;

