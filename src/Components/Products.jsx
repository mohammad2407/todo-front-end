import React, { useState, useEffect } from 'react'
import styled from "styled-components";
const Container = styled.nav`
    border: 1px solid red;
    padding: 1%;
    display: grid;
    grid-template-columns : repeat(4,1fr);
    grid-gap:12px;
    .picture{
        width: 50%;
    },

    .wrapper{
        border: 1px solid black;
        padding:2%;
    },
 
  

`
export const Products = () => {

    const [data, seData] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/Products')
            .then((response) => (response.json()))
            .then((response) => seData(response))
    }, [])

    console.log(data)


    return (
        <Container  >

            {
                data.map((product) =>
                    <div className='wrapper'>
                        <h4>{product.title}</h4>
                        <div className='image-block'>
                            <img src={product.image} className="picture" alt="" />
                        </div>
                        <div className='description'  >
                        {product.description}
                        </div>
                        <div className='rating' style={{display:"flex"}}>
                            <solid>Price : {product.price}$</solid>
                            <div className='rate'>Rate : {product.rating.rate}</div>
                            <div className='rate'>Count : {product.rating.count}</div>
                        </div>
                    </div>
                )
            }



        </Container>
    )
}
