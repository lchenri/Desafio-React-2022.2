import React, { useEffect, useState } from "react";
import Card from '../cards/membros/App.js';
import { api } from '../../services/api'
import './App.css'

function Post(){
    const [members, setMembers ] = useState([]);

    useEffect(() => {
        api.get('/members').then((response) => {
            setMembers(response.data)
        })
    }, [])
    return(
        <div>
            {members.map((cards) => {
                return <Card nome={cards.name} cargo={cards.cargo} departamento={cards.departamentos}/>;
            })}
        </div>
    );
}

export default Post;