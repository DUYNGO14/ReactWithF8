import { useState,useEffect } from "react";

function Avatar() {
    const [avatar,setAvatar] = useState(); 
    useEffect(() => {
        //cleanup function
        return ()=>{
            avatar &&URL.revokeObjectURL(avatar.preview);
        }
    },[avatar])   
   const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
   }
    return (
        <div>
           <input type="file"
           onChange={handlePreviewAvatar} />
           {avatar && <img src={avatar.preview} alt="" width='200px' height='200px' />}
        </div>
    )
}

export default Avatar