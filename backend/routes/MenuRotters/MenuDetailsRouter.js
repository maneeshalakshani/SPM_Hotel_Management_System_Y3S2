const express = require('express')
const router = express.Router();



const menudcontroller = require("../../controllers/MenuControllers/MenuDetailsController");
const menumodel= require("../../models/MenuModels/MenuDetailsModel");

router.post("/",menudcontroller.addMenud);
router.get("/getAllMenu", menudcontroller.getAllMenu);
router.get("/:id",menudcontroller.getmenu);
router.put("/:id",menudcontroller.updateMenu);
router.delete("/:id",menudcontroller.deletemenu);

module.exports=router;