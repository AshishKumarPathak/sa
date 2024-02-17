const pool =require('../../config/database')

module.exports={
create:(data,callBack)=>{
    pool.query(
        'insert into roles(roletype) values(?)',
         [
            data.roletype
         ],
         (error,results,fields)=>{
            if(error){
                callBack(error);
                console.log(error)
            }
            return callBack(null,results)
         }
    )
},

getRoles: callBack=>{
    pool.query(`select * from roles`,
    [],
    (error,results,fields)=>{
        if(error){
            return callBack(error)
        }
            return callBack(null,results)
        }
    )
},

// getUserByUserIds:(data,callBack)=>{
//     pool.query(`select * from registration where firstname=?`,
//     [
//         data.firstName,
//         data.lastName,
//         data.gender,
//         data.email,
//         data.password,
//         data.number,
        
//     ],
//     (error,results,fields)=>{
//         if(error){
//             return callBack(error);
//         }
//         return callBack(null,results)
//     })
// },

// updateUsers:(data,callBack)=>{
//     pool.query('update registration set lastName=? where firstName=?'
//     [
       
//         data.lastName
               
//     ],
//     (error,results,fields)=>{
//         if(error){
//             return callBack(error);
//         }
//         return callBack(null,results)
//     })
// },

// deleteUser:(data,callBack)=>{
//     pool.query(
//         `delete from registration where firstname =?`,
//         [
//             data.firstName,
//             data.lastName,
//             data.gender,
//             data.email,
//             data.password,
//             data.number,
            
//         ],
//         (error,results,fields)=>{
//             if(error){
//                 return callBack(error);
//             }
//             return callBack(null,results)
//         })
// },

// getUserByEmail:(email,callBack)=>{
//     pool.query(`select * from registration where email=?`,
//     [email],
//     (error,results,fields)=>{
//         if(error){
//             return callBack(error)
//         }
//             return callBack(null,results[0])
//         }
//     )
// },
}