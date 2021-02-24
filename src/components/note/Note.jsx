import React, { useState } from 'react';
import '../styles/note.css'
import { format } from "timeago.js";
import axios from 'axios';
import { Link } from "react-router-dom";



const Note = ({ id, title, content, date, author,actualizargetNotes }) => {

    /* const cardClass=`card ${socialColor}` */
    const cardClass = `card flex flex-col content-between`
    const baseURLNotes ='http://localhost:4004/api/notes/';


    const deleteNote = async () =>{
        await axios.delete(`${baseURLNotes}${id}`) 
        actualizargetNotes();
    }
    return (
        <>
            <article className="card-note"
                onDoubleClick={ 
                    () => deleteNote(id)
                } 
            
            >
                <Link 
                    to={`edit/${id}`}
                    className="card-body-content"
                >
                    <p className="card-title">
                        {/* <img src={icon} alt="" /> */}
                        {title}
                    </p>
                    <span className="card-followers-number">{content}</span>
                </Link>
                <p className="card-followers">
                    <span className="card-followers-title">@{author}</span>

                    <span className="card-today">
                        {/* <img src="images/icon-up.svg" alt="" /> */}
                        {format(date) }
                    </span>
                </p>
            </article>
        </>
    );
}
export default Note;