const {Router} = require('express');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/user.controllers');

const router = Router();

  router.get('/:id', usersGet);

  router.post('/', usersPost);

  router.put('/', usersPut);

  router.delete('/', usersDelete);

  router.patch('/', usersPatch);

module.exports = router;

