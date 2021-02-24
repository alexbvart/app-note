import axios from 'axios';
import React, {useState, useEffect} from 'react';
import '../styles/topCard.css'
import Note from './Note';



const NoteList = () => {

    const [notes, setNotes] = useState([])

    const baseURL ='http://localhost:4004/api/notes';


    const getNotes = async () =>{
        const res = await axios.get(baseURL);
        setNotes(res.data)

        console.log(res.data);
    }


    useEffect( async () => {
        await getNotes()
        /* return () => {
            cleanup
        } */
    }, [])

    return ( 
        <>
            <section className="top-cards">
                <div className="wrapper">
                    <div className="grid">
                    {
                        notes.map((cardData) => 
                            <Note  
                                key={cardData._id}
                                id={cardData._id}
                                title={cardData.title} 
                                content={cardData.content} 
                                date={cardData.date}
                                author={cardData.author}
                                actualizargetNotes={getNotes}
                            /> 
                        )
                    }

                    </div>
                </div>
            </section>
        </>
    );
}
export default NoteList;