const express = require('express');
const cors = require('cors');

class Server {
    constructor(){
      this.app = express();
      this.port = process.env.PORT;
      this.middlewares();     
      this.routes();
    }

    middlewares(){
      this.app.use(express.static('public'));
      this.app.use(cors());

      this.app.use(express.json());
    }

    routes(){
      this.app.use('/api/users', require('../routes/user.routes'));
    }

    listen(){
      this.app.listen(this.port, () => {
        console.log(`server running ${this.port}`)
      });
    }

}

module.exports = Server;