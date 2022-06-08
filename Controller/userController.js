const { application } = require("express");
const { find, findOne } = require("../mongooseConnect/schema");
const authorApi = require("../mongooseConnect/schema");
const BookApi = require("../mongooseConnect/schema2")


const createAuthor = (req,res) => {


        const createAuthorData = new authorApi(req.body)

          createAuthorData.save().then(() =>{

               res.send(createAuthorData);
          }).catch((err) =>{

             res.send(err);
          })
}
const createBook = (req,res) => {


    const createAuthorData = new BookApi(req.body)

      createAuthorData.save().then(() =>{

           res.send(createAuthorData);
      }).catch((err) =>{

         res.send(err);
      })
}

// fetch book name through the authorname
const getdataBook = async (req,res) =>{

       try{

         const data = await authorApi.findOne({author_name:"chetan Bhagat"}).select({bookName:1});
         res.send({msg:data});

       }catch(err){
          res.send(err)
       }
}

// fetch author_id through authorname
const getdata2Book = async (req,res) =>{

   try{
     
     const data = await authorApi.findOne({author_id:1}).select({author_name:1});
     res.send({msg:data});

   }catch(err){
      res.send(err)
   }
}

const getDataBook = async (req,res) =>{

   try{
     
      let data2 = req.body.author_id
     const data = await authorApi.find(data2).select({bookName:1});
     res.send({msg:data});

   }catch(err){
      res.send(err)
   }
}


const updateDataBook = async (req,res) =>{

   try{
     
      const _id = req.params.id
      const updataPrice = await BookApi.findByIdAndUpdate(_id,req.body, {
           new:true
      });
      res.send(updataPrice);

   }catch(err){
      res.send(err)
   }
}

const updateBook2 = async (req,res) =>{

   try{
     
      const updataPrice = await BookApi.findOne({authorName:"raju"}).select({price:1,authorName:1});
      res.send(updataPrice);

   }catch(err){
      res.send(err)
   }
}
const updateBook = async (req,res) =>{

   try{
     
      const updataPrice = await BookApi.findOneAndUpdate({athorName:"raju"},{$set:{authorName:"rajivi"}});
      res.send(updataPrice);

   }catch(err){
      res.send(err)
   }
}

const updateAuthor = async (req,res) =>{

   try{
     
      const updataPrice = await BookApi.find({author_id:1}).select({author_id:1,_id:1});
      res.send(updataPrice);

   }catch(err){
      res.send(err)
   }
}

const Price = async (req,res) =>{

   try{
     
      const comparePrice = await BookApi.find({price:{$lt:100}}).select({authorName:1});
      res.send(comparePrice);

   }catch(err){
      res.send(err)
   }
}


const Price2 = async (req,res) =>{

   try{
     
      const comparePrice = await BookApi.find({price:{$lt:100}}).select({author_id:1});
      
          res.send(comparePrice)

   }catch(err){
      res.send(err)
   }
}






module.exports.Price2 = Price2
module.exports.Price = Price
module.exports.updateAuthor = updateAuthor
module.exports.updateBook = updateBook
module.exports.updateBook2 = updateBook2
module.exports.updateDataBook = updateDataBook
module.exports.getDataBook = getDataBook
module.exports.getdata2Book = getdata2Book
module.exports.getdataBook = getdataBook
module.exports.createBook = createBook
module.exports.createAuthor = createAuthor;