import React, { useEffect, useState } from 'react'
import HeaderComponent from '../../../components/HeaderComponent'
import axios from 'axios'
import dayjs from "dayjs"
// import { MdMarkEmailRead, MdPhone } from 'react-icons/md'

const Appointment = () => {
    
    const [data,setData] = useState([])
        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get(
                  `${window.location.origin}/appointment/showappointment`
                );
                const appointmentValue = response.data.message
                setData(appointmentValue);
                console.log(appointmentValue)
              } catch (error) {
                console.error("Error fetching data:", error);
              }
            };
        
            fetchData();
          }, []);
    
    return (
        <main className='min-h-screen'>
            <HeaderComponent header='Appointment' />
            <div className='overflow-scroll container mx-auto my-20'>
                <table className="table-auto rounded-lg">
                    <thead>
                        <tr className="bg-white shadow space-x-6 flex items-center mb-1 rounded-md">
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap w-[20rem]">Doctor Name</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">Doctor Email</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">Patient Name</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">Pateint Email</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">PROJECT PEOPLE</th>
                            <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">Notes</th>
                            {/* <th className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MOVE IT FORWARD</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((appoint,i)=>{
                            return( 
                        <tr className="bg-white shadow space-x-6 flex items-center mb-1 rounded-md" key={i}>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap w-[20rem]">{appoint.doctorName}</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">{appoint.doctorEmail}</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">{appoint.pateintName}</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">{appoint.pateintEmail}</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">  {dayjs(appoint.appointmentTime).format('YYYY-MM-DD')}</td>
                            <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[8rem]">{appoint.notes}</td>
                            {/* <td className="p-2 text-xs opacity-70 text-blue-950 space-nowrap md:w-[10rem]">MOVE IT FORWARD</td> */}
                        </tr>
                         )
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Appointment