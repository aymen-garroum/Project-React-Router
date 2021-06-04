import './Filter.css'
import {useState} from 'react'
import Rating from '../Rating/Rating'

function Filter(props) {

    const [form_hidden, Setform] = useState(true)

    const afficher = () => {Setform(!form_hidden)}

    const maj_titre = (e) =>    {e.preventDefault()
                                props.val_titre(e.target.value)}

    const [new_title, SetTitle] = useState("")
    const [new_desc, SetDesc] = useState("")
    const [new_lien, SetLien] = useState("")
    const [new_rating, SetRating] = useState(1)

    const add_list = () =>  {props.set_list({title: new_title, description: new_desc, path: new_lien, rating: new_rating})
                            SetTitle("")
                            SetDesc("")
                            SetLien("")
                            SetRating(1)}
    
                            
    return (
        <div className="div_header">
            <div className="div_filtre">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
                <input style={{fontFamily:"Arial, FontAwesome"}} onChange={maj_titre} placeholder="&#xF002; Filtrer par titre"></input>
                <div onClick={(e)=>{props.val_rating(e.target.id)}} className="elem_rating"><Rating rating={props.state_rating}/></div>          
            </div>

            <button onClick={afficher} style={{height:"30px"}}>{form_hidden ? 'Nouveau':'Cacher'}</button>

            {!form_hidden && <dialog className="dialog_new">
                            <input value={new_title} onChange={(e) => SetTitle(e.target.value)} placeholder="Titre"></input>
                            <input value={new_desc} onChange={(e) => SetDesc(e.target.value)} placeholder="Description"></input>
                            <input value={new_lien} onChange={(e) => SetLien(e.target.value)} placeholder="Lien affiche"></input>
                            <div onClick={(e)=>{SetRating(e.target.id)}} className="elem_rating"><Rating rating={new_rating} /></div>
                            <button onClick={add_list} style={{width:"25%"}}>Ajouter</button>
                            </dialog>}

        </div>
    )
}

export default Filter
