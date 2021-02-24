import axios from 'axios';
import React, { useState } from 'react';
const Tabla = ({ users, actualizarGetUSer }) => {
    
    const baseURL ='http://localhost:4004/api/users';

    const deleteUser = async (id) =>{
        await axios.delete(`${baseURL}/${id}`) 
        actualizarGetUSer();
        console.log(`${baseURL}/${id}`);
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center ">

                <h1 className="text-lg font-medium">Usuarios registrados</h1>
                <div className="flex flex-col mt-6">

                                <table className="min-w-full text-sm text-gray-400">
                                    <thead className="text-xs uppercase font-medium">
                                        <tr>
                                            <th></th>
                                            <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                                Username
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                                ACtion
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {
                                            users.map((user) => (
                                                <tr 
                                                    key={user._id} 
                                                    className=""
                                                    onDoubleClick={ 
                                                        () => deleteUser(user._id)
                                                    }                                               
                                                
                                                >
                                                    <td className="pl-4">

                                                    </td>
                                                    <td className="flex px-6 py-4 whitespace-nowrap">
                                                        {/* <img className="w-5" src="https://ssl.gstatic.com/onebox/media/sports/logos/udQ6ns69PctCv143h-GeYw_48x48.png" alt="" /> */}
                                                        <span className="ml-2 font-large">{user.username}</span>
                                                    </td>
                                                    <td className="pl-4">
                                                        x
                                            </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            
                </div>



            </div>
        </>
    );
}
export default Tabla;