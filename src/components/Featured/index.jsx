import React from "react";
import {Link} from "react-router-dom"

import { Container, ImageDestack } from "./style";

export function Featured({id, name, price, image_url}) {
    
    return (
        <Container id={id}>
            <ImageDestack imageURL={image_url}/>
            <div>
                <h3>{name}</h3>
                <h4>R$ {price}</h4>
            </div>
            <button onClick="">Comprar</button>
        </Container>
    )
}