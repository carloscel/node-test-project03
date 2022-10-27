
const usersGet = (req, res) => {

  const {id} = req.params;
  const body = req.body;
  
  const data = body.filter(user => user.id == id)

  res.json({
    ok: true,
    msg: 'GET api',
    data
  })
}


const usersPost = (req, res) => {

  res.json({
    ok: true,
    msg: 'POST api',
  })
}

const usersPut = (req, res) => {
  res.json({
    ok: true,
    msg: 'PUT api'
  })
}

const usersDelete = (req, res) => {
  res.json({
    ok: true,
    msg: 'DELETE api'
  })
}

module.exports = {
  usersGet,
  usersPost, 
  usersPut,
  usersDelete
}