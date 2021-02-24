import React, { useRef, useEffect,useState } from 'react';
import './styles/dark.css'
const Dark = () => {

    const [Checked, setChecked] = useState(false)

    const ref = useRef(null)

    useEffect(() => {
        const mQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setChecked(mQuery.matches)
        //meddiaQuery.addListener(changeMedia)
    }, [])

    const changeMedia = (mQuery)=>{
        if (mQuery.matches) {
            setChecked(true)
        }
    }

    const handleChange = (event) => {
        /*  console.log(event.target.checked); */
        let checked = ref.current.checked;
        console.log(checked);
        setChecked(checked)

        if (checked) {
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
          } else {
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
        }
    }

    return (
        <>
            <div className="dark-mode">
                <p className="dark-mode-title">Dark Mode</p>
                <input 
                    type="checkbox" 
                    className="checkbox" 
                    id="checkbox"
                    checked={Checked} 
                    ref={ref}
                    onChange={ handleChange
                    }
                />
                <label className="switch" htmlFor="checkbox">

                </label>
            </div>                        
        </>
    );
}
export default Dark;