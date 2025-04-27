import React, { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import DialogBox from "./DialogBox";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Logo from "../components/logo-png.png";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
    console.log(user?.picture);
    handleSignIn();
  }, [user]);

  const handleSignIn = useGoogleLogin({
    onSuccess:(codeResp)=>getUserProfile(codeResp),
    onError:(error)=>console.log(error)
 })

 const getUserProfile= async (tokenInfo) =>{
   axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
     headers:{
       Authorization: `Bearer ${tokenInfo?.access_token}`,
       Accept: 'Application/json'
     }
   }).then((response)=>{
     console.log(response);
     localStorage.setItem('user', JSON.stringify(response?.data));
     setOpenDialog(false);
     window.location.reload();
   })
 }


  return (
    <>
    <div className="flex justify-between bg-zinc-400 items-center py-2 px-3 shadow-md">
      <img className=" w-[350px] h-[75px] mix-blend-darken rounded-lg object-cover" src={Logo}  />
      <div>
        {user ? (
          <div className="flex gap-3 items-center">
            <a href='/create-trip' >
              <button className="bg-[#2b1915] text-white font-medium px-4 py-2 rounded-lg shadow-md hover:from-orange-500 hover:to-pink-600 transition-all duration-300">
                + Create Trip
              </button>
            </a>
            <a href='/my-trips' >
              <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium px-4 py-2 w-[100px] rounded-lg shadow-md hover:from-orange-500 hover:to-pink-600 transition-all duration-300">
                My Trips
              </button>
            </a>
            <Popover.Root>
              <Popover.Trigger asChild>
                <img
                  src={user?.picture}
                  className="w-[35px] h-[35px] rounded-full cursor-pointer"
                  alt="User"
                />
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content className="rounded-lg shadow-lg bg-gray-400  p-2 w-25 z-50">
                  <button className="w-full outline-none text-left px-2"
                     onClick={() => {
                       googleLogout();
                       localStorage.clear();
                       window.location.reload();
                       window.location.href='/';
                     }}
                  >
                    Logout
                  </button>
                  <Popover.Arrow className="fill-white" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          </div>
        ) : (
          <button onClick={()=>setOpenDialog(true)} className="bg-black text-white p-2 w-[90px] rounded-lg">
            Sign In
          </button>
        )}
      </div>
    </div>

    <div>
        {/* <button onClick={() => setOpenDialog(true)} className="bg-blue-500 text-white p-2 rounded-md">Open Dialog</button> */}

        <DialogBox
          isOpen={openDialog}
          onClose={() => setOpenDialog(false)}
          title="Please Sign In"
          actionText="Sign In with Google"
          onAction={handleSignIn}
          icon={FcGoogle}
        >
          To generate a customized trip plan, please sign in first.
        </DialogBox>
      </div>
    </>
  );
};

export default Header;
