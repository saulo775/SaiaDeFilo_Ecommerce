import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiShoppingCart, FiUser } from "react-icons/fi";

import { Featured } from "../../components/Featured";
import { Footer } from "../../components/Footer";

import {Main, RightSide, LeftSide, FormsSignUp, ListProduct, Container, Header } from "./style"

function ShoppingCart(){
    const [featuredProducts, setFeaturedProducts] = React.useState([]);

    React.useEffect(()=>{
        const promise = axios({
            method: "GET",
            url: "http://localhost:5000/featured-products",
        });

        promise.then((response)=>{
            setFeaturedProducts(response.data);
        });

        promise.catch((e)=>{
            console.log(e);
        });
    }, []);


    const featured = featuredProducts.map((item)=>{
        return (
            <Featured 
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image_url={item.image_url}
            />
        );
    });

    return(
        <Container>
            <Header>
                <h1>Saia de Filó</h1>
                <div>
                    <nav>
                        <Link to={"/"}>Home</Link>
                        <Link to={"products"}>Produtos</Link>
                    </nav>
                    <Link to="/shoppingCart"><FiShoppingCart /></Link>
                    <Link to="/sign-up"><FiUser /></Link>
                </div>
            </Header>
            <Main>
                <LeftSide>                
                    <ListProduct>
                        <ul>
                            <li>
                               {featured}
                            </li>
                            <li>
                               {featured}
                            </li>
                            <li>
                               {featured}
                            </li>
                            <li>
                               {featured}
                            </li>
                            <li>
                               {featured}
                            </li>
                        </ul>
                    </ListProduct>
                </LeftSide>
                <RightSide>
                    <FormsSignUp>
                   
                    </FormsSignUp>
                </RightSide>
            </Main>

            <Footer/>
        </Container>
    );
}

export default ShoppingCart;