const {request, response} = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');


const usersGet = async ( req = request, res = response) => {

  const {from = 0, limit = 5 } = req.query;

  const queryStatus = {status: true};
  //cuantos tienen el estatus true(activos)

  const [users, totalUsers] = await Promise.all([
    User.find(queryStatus).skip(Number(from)).limit(Number(limit)),
    //en le postman: {{url}}/api/users?limit=2
 
    User.countDocuments(queryStatus)
    //total documentos de la colección
  ])
 

  res.json({
    msg: 'GET api',
    totalUsers,
    users
  })
}

const usersPost = async (req = request, res = response) => {

  const {name, email, password, role} = req.body;
  const user = new User({name, email, password, role})

  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();

  res.json({
    
    msg: 'POST api',
    user
  })
}

const usersPut = async (req = request, res = response) => {

  const {id} = req.params;
  const { password, email, ...rest} = req.body;

  if(password){
    const salt = bcryptjs.genSaltSync();
    rest.password = bcryptjs.hashSync(password, salt);
  }

  const user = await User.findByIdAndUpdate(id, rest)

  res.json({
    msg: 'PUT api',
    user
  })
}
 
const usersDelete = async (req = request, res = response) => {

  const {id} = req.params;
  const usersDelete = await User.findByIdAndUpdate(id, {status: false})
  
  res.json({
    msg: 'Se eliminó el usuario',
    usersDelete
  })
}

const usersPatch = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'PATCH api'
  })
}

module.exports = {
  usersGet,
  usersPost, 
  usersPut,
  usersDelete,
  usersPatch
}