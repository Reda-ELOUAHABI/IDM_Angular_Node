const  express = require("express")
const  router = express.Router

Router
  .get('/films', (req,res)=>{
    res.send(films)
  })
// export routerModule;

