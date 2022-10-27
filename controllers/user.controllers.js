const {request, response} = require('express')

const usersGet = ( req = request, res = response) => {

  const {id} = req.params;
  const body = req.body;
  
  const data = body.filter(user => user.id == id)

  res.json({
    ok: true,
    msg: 'GET api',
    data
  })
}

const usersPost = (req = request, res = response) => {

  res.json({
    ok: true,
    msg: 'POST api',
  })
}

const usersPut = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'PUT api'
  })
}

const usersDelete = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: 'DELETE api'
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