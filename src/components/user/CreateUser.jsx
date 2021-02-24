import React, {useState, useEffect} from 'react';
import axios from 'axios'
import '../styles/createUser.css'
import Tabla from './Tabla'
import FormUser from './FormUser';
const CreateUSer = () => {

    const baseURL ='http://localhost:4004/api/users';
    const [user, setUser] = useState([]);
    
    const getUSer = async () =>{
        const res = await axios.get(baseURL);
        setUser(res.data)
        console.log(res.data);
    }


    useEffect( async () => {
        await getUSer()
        /* return () => {
            cleanup
        } */
    }, [])

    return ( 
        <div className="grid  grid-cols-1 md:grid-cols-2  gap-4">
            <FormUser  actualizarGetUSer={getUSer}

            />
            <Tabla users={user} actualizarGetUSer={getUSer}/>  
        </div>
    );
}
export default CreateUSer;