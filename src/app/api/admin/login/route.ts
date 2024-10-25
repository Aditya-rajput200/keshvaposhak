

// import { NextRequest } from "next/server";
// import {jwt}  from  "jsonwebtoken"
// import { headers } from "next/headers";

// export async function POST(req: NextRequest,res: NextResponse) {
//     const {email,password} = await req.json();
    
     
//     if(email==process.env.Admin_email && password ==process.env.Admin_password){
//         // generate a token 
//         const token = jwt.sign({email},process.env.JWT_SECRET);

//         return res.json({ message: 'Login successful' }, {
//             headers: {
//               'Set-Cookie': `auth_token=${token}; HttpOnly; Secure; Path=/; Max-Age=3600; SameSite=Lax;`,
//             },
//           });
//         }

//     else{
//         return res.status(401).json({error:"Invalid Credentials"});
//     }
// }