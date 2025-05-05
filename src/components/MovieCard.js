'use client'
import {React,useState,useEffect} from "react";
import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import "./moviCard.css"
export const MovieCard = (props)=>{
  const [rating,setrating] = useState(0)
  const [isRated,setIsRated] = useState(false)
  const [ movieQuality, setMovieQuality] = useState("")
  const totalStars = 5
  useEffect(()=>{
    if (rating > 0 && rating <=1)
      setMovieQuality(()=>" Bad Movie 😟");
    else if(rating >1 && rating<=2)
      setMovieQuality(()=>" Decent Movie 😐");
    else if(rating >2 && rating<=4)
      setMovieQuality(()=>" Good Movie 🤗");
    else if(rating > 4)
      setMovieQuality(()=>" Great Movie 🥳");
  },[rating])
 
  
  return(
    <>
    <div className="flex  flex-col gap-3 justify-items-center">
      <div className="flex flex-col rounded-md border-4 border-purple-400">
        <div className="bg-white">
         <img className=" w-md" src={props.moviePoster} />
         </div>
         <div className="flex flex-col gap-2 p-10 text-center text-purple-400 bg-black">
          <p className="text-3xl text-purple-200 font-sans">
            {isRated ? "Rating Added":"Add Your Rating"}
          </p>

            <h1 className="font-sans text-5xl pt-5">{props.movieName}</h1>
            <p className="pl-5 pt-5 font-sans text-xl text-purple-300">{movieQuality}</p> 
            <p className=" font-sans text-xl text-purple-300">{props.movieRelease}</p>
            <div className="flex justify-center">
            {[...Array(rating)].map((_, i) => (
              <button key={`filled-${i}`}  onClick={()=>{setrating(i+1); setIsRated(true)}}><IoIosStar className="text-4xl" /></button>
            ))}
            {[...Array(totalStars - rating)].map((_, i) => (
              <button  key={`empty-${i}`}  onClick={()=>{setrating(rating+i+1); setIsRated(true)}}><CiStar className="text-4xl" /></button>
            ))}
          </div>
          </div> 
          
      </div>
      
    </div>
    </>
  )
}