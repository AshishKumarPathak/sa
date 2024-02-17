const{createRole}=require("./role.controller")
const{getRoles}=require("./role.controller")
const router =require("express").Router();

router.post("/",createRole)
router.get("/",getRoles)
// router.get("/:id",getUserByUserId)
// router.patch("/:id",updateUser)
// router.delete("/:id",deleteUser)
// router.post("/login",login)


module.exports=router;