import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../styles/formUser.css'
import '../styles/calendar.css'
import { useParams, useHistory  } from 'react-router-dom';

const FormNote = ({ actualizarGetUSer }) => {

    const {id} = useParams();
    console.log(id);
    let history = useHistory();
    console.log(history);
    
    const [editingNote, setEditingNote] = useState(false)


    /* Logic de get users */
    const baseURLuser ='http://localhost:4004/api/users';
    const [user, setUser] = useState([]);

    const getUSer = async () =>{
        const res = await axios.get(baseURLuser);
        setUser(res.data)
        setUserSelectetAsAuthor({
            userSelectetAsAuthor : res.data[0].username
        })
        console.log(res.data);
    }
    

    /* Logic de notes */
    const baseURL = 'http://localhost:4004/api/notes';
    
    const [userSelectetAsAuthor, setUserSelectetAsAuthor] = useState('')
    const [_id, set_id] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [datep, setDatep] = useState(new Date())

    const onAllInputChange = (e) => {
        
        const input = e.target.name
        switch (input) {
            case 'userSelectetAsAuthor':
                setUserSelectetAsAuthor({
                    userSelectetAsAuthor : e.target.value
                })
                break;
            case 'title':
                setTitle({
                    title: e.target.value
                })
                break;
            case 'content':
                setContent({
                    content : e.target.value
                })
                break;
            default:
                break;
        }
        console.log(input,e.target.value );
    }

    const getOneNote = async() => {
        const res = await axios.get(`${baseURL}/${id}`)
        return res.data;
    }

    const onSubmitNoteForm = async (e) => {
        e.preventDefault();
        console.log('id:',_id._id,userSelectetAsAuthor,title.title,content.content,datep );
        const newNote = {
                title: title.title, 
                content: content.content, 
                date: datep,
                author:userSelectetAsAuthor.userSelectetAsAuthor
        }
        if (editingNote) {
            const res = await axios.put( `${baseURL}/${id}`, newNote )
        } else {
            const res = await axios.post(baseURL, newNote )
        }
        pushHome();
    }

    const pushHome = () => {        history.push("/");    }


    useEffect( async () => {
        await getUSer()

        if (id) {

            const resData = await getOneNote()
            console.log(new Date(resData.date));

            setTitle({
                title:resData.title
            })
            setContent({
                content:resData.content
            })
            /* setDatep({
                datep: new Date(resData.date)
            }) */
            setUserSelectetAsAuthor({
                userSelectetAsAuthor: resData.author
            })

            setEditingNote({
                editingNote: true
            })
            set_id({
                _id: id
            })
        }
        /* return () => {
            cleanup
        } */
    }, [])

    return (
        <>
            <form className="card-form m-auto" onSubmit={onSubmitNoteForm} >

                <div className="text" >
                    <div className="title">
                        { editingNote ? "Update note" : "New note"  }                    
                    </div>
                    <div className="info">
                        { editingNote ? "Update note now" : "Register a new note"  }
                    </div>

                    <div className="col-span-6 sm:col-span-3 mt-4">
                        <label forhtml="userSelectetAsAuthor" 
                            className="block text-sm">Author</label>
                        <select 
                            id="userSelect" 
                            name="userSelectetAsAuthor" 
                            onChange={onAllInputChange}
                            value={userSelectetAsAuthor.userSelectetAsAuthor}
                            className="mt-1 block w-full py-2 px-3 bg--cardGray rounded-md shadow-sm focus:outline-none sm:text-sm">
                            { user.map((user) => (
                                <option key={user._id}  >{user.username} </option>
                            ))
                            }

                        </select>
                    </div>
                    <div className="mt-4">
                        <label forhtml="title" 
                            className="block text-sm font-medium cl--cardTitle">
                            Title
                        </label>
                        <input type="text" name="title" id="iusername" 
                            className="pt-4 mt-1"
                            onChange={onAllInputChange}
                            value={title.title}
                        />
                    </div>


                    <div className="mt-4">
                        <label forhtml="content" 
                            className="block text-sm font-medium ">
                            Content
                        </label>
                        <div className="mt-1">
                            <textarea 
                                id="content" 
                                name="content" 
                                rows="3" 
                                className="pt-1 pl-1   mt-1 block w-full sm:text-sm bg--cardGray rounded-md" 
                                placeholder="Tomorrow afternoon do ..."
                                onChange={onAllInputChange}
                                value={content.content}
                            >
                                
                            </textarea>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                            Brief description of your annotation
                        </p>
                    </div>


                    <div className="mt-4">
                        <label forhtml="date" 
                            className="block text-sm font-medium ">
                            Date
                        </label>
                        <DatePicker 
                            className="w-100 pickers" 
                            selected={datep}                        
                            onChange={date => setDatep(date)} 
                        />
                        <p className="mt-1 text-sm text-gray-500">
                            Brief description of your annotation
                        </p>
                    </div>
                </div>

                <div className="buttons">
                    <button className="button"
                        onClick={pushHome}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="button button-primary"

                    >
                        { editingNote ? "Update it" : "Do it"  }
                    </button>
                </div>
            </form>
        </>
    );
}
export default FormNote;    