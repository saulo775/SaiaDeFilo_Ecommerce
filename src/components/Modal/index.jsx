import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { FiX } from "react-icons/fi";
import {
    Container,
    Content,
    ProductImage,
    ProductInfos
} from "./styles";

import UserContext from "../../assets/context/userContext";
import { useNavigate } from "react-router-dom";

export function Modal({ setActiveModal, modalData }) {
    const { token } = React.useContext(UserContext);

    const navigate = useNavigate()

    const Buy = async () => {
        try {
            await axios.post("https://saia-de-filo.herokuapp.com/shoppingCart", {
                data: modalData,
                userId: token.userId,
            }, { headers: { Authorization: `Bearer ${token.token}` } });
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Produto adicionado ao carrinho',
                showConfirmButton: false,
                timer: 1500
            })                        
        } catch (error) {
            navigate("/sign-in");
            console.log(error)
            console.log(error);
            
        }
    }

    return modalData ? (
        <Container>
            <FiX
                onClick={() => {
                    setActiveModal(false);
                }}
            />

            <Content>
                <ProductImage image_url={modalData.imageURL} />
                <ProductInfos>
                    <h2>{modalData.name}</h2>
                    <p>{modalData.description}</p>

                    <ul>
                        {
                            modalData.size.map((item, index) => {
                                return (
                                    <span key={item + index}>
                                        <li>{item}</li>
                                    </span>
                                )
                            })
                        }
                    </ul>

                    {
                        modalData.stock <= 10
                            ? <p className="lastUnits">Ultimas {modalData.stock} unidades restantes!</p>
                            : <></>
                    }

                    <h3>Por apenas R${modalData.price}</h3>

                    <button onClick={Buy}>Adcionar ao carrinho</button>


                </ProductInfos>
            </Content>

        </Container>
    ) : <></>
}