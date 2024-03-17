const express = require('express');
const { addTransection, getAllTransection , editTransection ,deleteTransection } = require('../controllers/transectionCtrl');


//router object

const router = express.Router();



// routers


//Add transection POST Method
router.post("/add-transection", addTransection);

//EDIT transection POST Method
router.post("/edit-transection", editTransection);
//DELETE transection POST Method
router.post("/delete-transection", deleteTransection);

//Get Transections
router.post("/get-transection", getAllTransection ,);




module.exports = router;
