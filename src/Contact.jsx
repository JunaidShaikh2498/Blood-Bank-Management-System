import React, { useEffect, useState } from 'react'

export const Contact = () => {
    const[banks,setBanks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:9000/contact")
        .then(resp=>resp.json())
        .then(data=>setBanks(data))
    },[]);
  return (
    <div>
        <h2>We have all the blood banks around Pune,you can contact them for any assistance.</h2>
        <table border={1} style={{borderCollapse:'collapse'}}>
            <tr>
                <th>Blood Bank Name</th>
                <th>Contact</th>
                <th>Address</th>
                
            </tr>
            {banks.map((e)=>{
                return(
                    <tr className='mx-3'>
                        <td>{e.Blood_Bank_Name}</td>
                        <td>{e.Blood_Bank_Contact}</td>
                        <td>{e.Blood_Bank_Address}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}