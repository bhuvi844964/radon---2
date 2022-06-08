const express = require('express')
const router = express.Router();
const BookApi = require("../mongooseConnect/schema2")
const authorApi = require("../mongooseConnect/schema");
const crudOperation = require("../Controller/userController");




router.post('/createAuthor',crudOperation.createAuthor );

router.post("/createBook",crudOperation.createBook)

router.get("/getdataBook",crudOperation.getdataBook);

router.post("/getDataBook",crudOperation.getDataBook);

router.get("/getdata2Book",crudOperation.getdata2Book);

router.patch("/updateBook/:id",crudOperation.updateDataBook);

router.get("/findBook",crudOperation.updateBook2);

router.get("/fetchdata",crudOperation.updateBook)

router.get("/fetchdata2",crudOperation.updateAuthor)
 
router.get("/comparePrice", crudOperation.Price);

router.get("/comparePrice2", crudOperation.Price2);



module.exports = router;