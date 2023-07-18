"use client";
import React from 'react';
import { useRouter} from 'next/navigation';

export default function Resume(){
    const router= useRouter();

    return(
        <div>
           <div>
           <h2 className="text-purple-800 cursor-pointer py-2" onClick={()=>router.push('/')}>Back to Home</h2>
           </div>
           <div>
            <a href="/Resume_Nikhil.pdf" target="_blank">My Resume</a>
            </div>
        </div>
    );

}
    

    
       

