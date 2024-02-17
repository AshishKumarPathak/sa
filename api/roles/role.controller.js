const { getRoles } = require("./role.service");
const {create} = require("./role.service")


module.exports={
    
    createRole:(req,res)=>{
        const body=req.body;
      
        create(body, (error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message:"Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    
    getRoles:(req,res)=>{
        const body=req.body;
        getRoles( (error,results)=>{
            if(error){
                console.log(error);
                return res.status(500).json({
                    success: 0,
                    message:"Database connection error"
                });
            }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },

    // getUserByUserId:(req,res)=>{
    //     const data=req.body;
    //     getUserByUserIds(data,(error,results)=>{
    //         if(error){
    //             console.log(error);
    //             return res.status(500).json({
    //                 success: 0,
    //                 message:"Database connection error"
    //             });
    //         }
    //         return res.status(200).json({
    //             success:1,
    //             data:results
    //         })
    //     })
    // },
    
    // updateUser:(req,res)=>{
    //     const body=req.body;
    //     const salt=genSaltSync(10);
    //     //body.password=hashSync(body.password,salt);
    //     updateUsers(body,(error,results)=>{
    //         if(error){
    //             console.log(error);
    //             return
    //         }
    //         if(!results){
    //             return res.json({
    //                 success:0,
    //                 message:'failed to update user '
    //             })
    //         }
    //         return res.json({
    //             success:1,
    //             message:"update successfully"
    //         })
    //     })
    // },
    // deleteUser:(req,res)=>{
    //     const data=req.body;
    //     deleteUser(data,(error,results)=>{
    //         if(error){
    //             console.log(error);
    //             return res.status(500).json({
    //                 success: 0,
    //                 message:"Database connection error"
    //             });
    //         }
    //         return res.status(200).json({
    //             success:1,
    //             data:results
    //         })
    // })
    // },
    // login:(req,res)=>{
    //     const body =req.body;
    //     getUserByEmail(body.email,(error,results)=>{
    //         if(error){
    //             console.log(error);
    //         }
    //         if(!results){
    //             return res.json({
    //                 success:0,
    //                 data:"invalid email or password"
    //             })
    //         }
    //         const result =compareSync(body.password,results.password);
    //         if(result){
    //             results.password=undefined;
    //             const jsontoken=sign({result:results},"qwe1234",{
    //                 expiresIn:"1h"
    //             })
    //             return res.json({
    //                 success:1,
    //                 message:"login Succesfully",
    //                 token:jsontoken
    //             })
    //         }
    //         else{
    //             return res.json({
    //                 success:0,
    //                 data :"invalid email or password"
    //             })
    //         }
            
    //     })

    // }

}