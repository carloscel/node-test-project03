const {Router} = require('express');
const { check } = require('express-validator');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/user.controllers');
const { isValidRole, isEmailExist, isValidUserById } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

  router.get('/', usersGet);

  router.post('/',
    [
      check('name', 'El nombre es obligatorio').not().isEmpty(),
      check('email', 'El correo no es válido').isEmail(),
      check('password', 'El password debe ser mayor a 6 dígitos').isLength({min:6}),
      check('role').custom(isValidRole),
      check('email').custom(isEmailExist),
      validateFields
    ], 
    usersPost);

  router.put('/:id',
    [
      check('id', 'El id no es mongoDB').isMongoId(),
      check('id').custom(isValidUserById),
      check('role').custom(isValidRole), 
      validateFields
    ], 
    usersPut);

  router.delete('/:id',
    [
      check('id', 'El id no es mongoDB').isMongoId(),
      check('id').custom(isValidUserById),
      validateFields
    ], 
    usersDelete);

  router.patch('/', usersPatch);

module.exports = router;

