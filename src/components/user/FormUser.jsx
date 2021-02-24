import React, { useState } from 'react';
import axios from 'axios';
import '../styles/formUser.css'
const FormUser = ({actualizarGetUSer}) => {
    
    const baseURL ='http://localhost:4004/api/users';
    
    const [newUserName, setNewUserName] = useState([])

    const onChangeUserForm=(e)=>{
        setNewUserName( {
            username: e.target.value
        }) 
        console.log(newUserName.username);
    }
    const onSubmitUserForm = async(e) => {
        e.preventDefault();
        const res = await axios.post(baseURL,{
            username:newUserName.username
        })
        clearInput();
        actualizarGetUSer();
        console.log(res);
    }

    const inputUsernamebyId=document.getElementById('iusername')
    const clearInput = () =>{
        inputUsernamebyId.value = "";
    }

    return (
        <>
                    <form className="card-form m-auto" onSubmit={onSubmitUserForm} >

                        <div className="text" >
                            <div className="title">
                                New user
                            </div>
                            <div className="info">
                                Register a new note partner.
                            </div>
                            <div>
                                <input type="text" name="" id="iusername" className="pt-4 mt-4"  
                                    onChange={ (e) => 
                                    {
                                        onChangeUserForm(e)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="buttons">
                            <button className="button"
                                onClick={clearInput}
                            >
                                Cancel
                            </button>
                            <button  
                                type="submit"
                                className="button button-primary"
                                
                            >
                                Do it!
                            </button>
                        </div>
                    </form>
        </>
    );
}
export default FormUser;    