import { TextField } from "@mui/material"
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { signIn } from "@/auth"

export default function Login () {
    return (
        <main className="min-h-screen flex justify-center px-2 md:px-12 md:py-10 lg:px-16 lg:px-12">
            <div className="w-full md:w-[350px] max-h-[400px] flex flex-col gap-8 rounded md:shadow-md md:px-3 md:py-4">
                <div>
                   <h1 className="text-3xl font-semibold text-center">Log In</h1>
                   <p className="text-blue-300 text-center">Create an Account or sign in</p>
                </div>
             <form className="justify-items-center">
                <div>
                 <TextField
                 fullWidth
                 placeholder="emmanuel@gmail.com"
                 label="Enter Email"
                 type="email"
                 size="small"
                 />
                 <button className="w-full text-white bg-blue-500 rounded-md hover:opacity-40 p-3 mt-2 h-10">Continue</button>
                </div>
             </form>
             <p className="text-center text-gray-700">or sign up</p>
             <div className="flex justify-center gap-4">
                <form action={async ()=>{
                      "use server"
                    await signIn()
                }} 
                className="justify-items-center">
                    <button type="submit" className="w-full h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <FcGoogle className="text-4xl"/>
                    </button>
                </form>
                <form>
                    <button type="submit" className="w-full h-10 border rounded-md shadow-lg border-gray-300 cursor-pointer">
                        <FaGithub className="text-4xl"/>
                    </button>
                </form>
             </div>
            </div>
        </main>
    )
}