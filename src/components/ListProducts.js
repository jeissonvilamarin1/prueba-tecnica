import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { filterAsync, filtro } from "../actions/actionProducts";

export const ListProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store.products);
  console.log(products);

      const [select, setSelect] = useState('asc')
      console.log(select)

      const handleSelect = (e)=>{
            setSelect((e.target.value));
            dispatch(filterAsync(select, products))
      }
      useEffect(() => {
            
      }, [])

  return (
    <>
      <Container fluid>
        <button onClick={() => dispatch(filterAsync(0))}></button>
        <select value={select} onChange={handleSelect}>
          <option >Ordenar por:</option>
          <option value="desc">Menor Precio</option>
          <option value="asc">Mayor Precio</option>
        </select>
        <Row>
          {filtro
            ? products.map((product) => (
                <>
                  <Col md={4} xs="auto" className="mb-4">
                    <Card style={{ width: "18rem" }} key={v4()}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>R$ {product.price},00</Card.Text>
                        <Card.Text>compra 5x R${product.units},00</Card.Text>
                        <div className="d-grid gap-2">
                          <Button variant="dark" size="lg">
                            COMPRAR
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))
            : products.map((product) => (
                <>
                  <Col md={4} xs="auto" className="mb-4">
                    <Card style={{ width: "18rem" }} key={v4()}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>R$ {product.price},00</Card.Text>
                        <Card.Text>compra 5x R${product.units},00</Card.Text>
                        <div className="d-grid gap-2">
                          <Button variant="dark" size="lg">
                            COMPRAR
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))}
        </Row>
      </Container>
    </>
  );
};
