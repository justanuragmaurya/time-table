"use client"
import { use, useEffect, useState } from "react";
import { data, DailySchedule, ScheduleEntry } from "./data/timetable";
import { json } from "stream/consumers";

export default function Home() {
  const [currentClass, setClass] = useState<ScheduleEntry | null>(null);
  const [upCommingClass, setUClass] = useState<ScheduleEntry | null>(null)
  const [day,setDay] = useState("");
  let [refreshState , setRefresh] = useState(0);
  const [hourIndex , setHour] = useState<number | null>(null);

  const handleRefresh = ()=>{
    setRefresh(refreshState+1)
  }
  const Days = ["Sun","Mon","Tue","Thu","Fri","Sat"]
  useEffect(()=>{
    console.log(data.Schedule)
    const date= new Date();
  
    if(date.getHours() == 9){
      setHour(0)
    }
    else if(date.getHours() == 10){
      setHour(1)
    }
    else if(date.getHours() == 11){
      setHour(2)
    }
    else if(date.getHours() == 12){
      setHour(3)
    }
    else if(date.getHours() == 13){
      setHour(4)
    }
    else if(date.getHours() == 14){
      setHour(5)
    }
    else if(date.getHours() == 15){
      setHour(6)
    }
    else if(date.getHours() == 16){
      setHour(7)
    }
    else{
      setHour(4)
      console.log("chuti hogyi hai bkl")
    }

    {`______________________________________`}
    // if(Days[date.getDay()] == "Mon"){
    //   setDay("Mon")
    // }
    // else if(Days[date.getDay()] == "Mon"){
    //   setDay("Mon")
    // }
    // else if(Days[date.getDay()] == "Tue"){
    //   setDay("Tue")
    // }
    // else if(Days[date.getDay()] == "Wed"){
    //   setDay("Wed")
    // }
    // else if(Days[date.getDay()] == "Thu"){
    //   setDay("Thu")
    // }
    // else if(Days[date.getDay()] == "Mon"){
    //   setDay("Fri")
    // }
    // else if(Days[date.getDay()] == "Sat"){
    //   setDay("Sat")
    // }

    setDay(Days[date.getDay()])
    console.log(day)
  },[refreshState])

  useEffect(()=>{
    handleRefresh();
  },[])

  return (  
    <>
      <div className="flex flex-col bg-[#1a1a1a]">
        {hourIndex !== null && day ? (
          JSON.stringify(data.Schedule[hourIndex][day as keyof DailySchedule])
        ) : (
          "No class information available gwquefgwefhiwqef"
        )}
        <button onClick={handleRefresh} className="bg-red-500"> Refresh </button>
        <div>
        </div>
      </div>
    </>
  );
}