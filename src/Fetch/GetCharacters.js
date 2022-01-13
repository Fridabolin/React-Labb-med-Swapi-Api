import React, {useState, useEffect} from 'react'
import Modal from '../Components/Modal'
import './GetCharacters.css'

const p_Style = {
    padding:"2px",  
}
//styling till karaktärerna

const GetCharacters = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState([true])
    
  
    const promises = props.film.characters.map((url)=>
    fetch(url).then((res) => res.json())); 
    //Hämtar karaktärslänkarna
    console.log(characters)
    
    useEffect(() => {
        Promise.all(promises).then((res) => { 
            setCharacters(res) 
            setLoading(false) 
        })    
    },[isOpen]);
  
    //"öppnar" upp/hämtar länkarna
    
    //-------------------- Ovanför fetch , nedanför visar vi först filmtitel & utgivningsdatum i en knapp --------------------------//
    //-------------------i Modulen visar vi karaktärer % loading--------------------------------------------------------------------//
    return (
        <div>
            <button className="titleButton" onClick={() => setIsOpen(true)}> {props.film.title} | {props.film.release_date}</button>
            
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
             <h2>{props.film.title}</h2>
             
             {loading && <div>Loading...</div>}
        
             {characters.sort((a,b) => a.name > b.name ? 1 : -1).map((char, index) =>
                <p className="characters" style={p_Style} key={index} > {char.name} </p> 
            )}
            </Modal>
        </div>
    )
}
// I modal, sätter loding, och mappar ut alla karraktärer samt sorterar dom i bokstavsordning. 

export default GetCharacters
