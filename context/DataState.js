import React, { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataState = props => {
    // const cart = { '_id': '', 'price': 0, 'quantity': 0 }
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);



    const onAdd = (product, newQuantity) => {
        const { _id, price, } = product
        const matchedID = cartItems.indexOf(item=>{
            return item._id == _id
        })
        if(matchedID === -1) {

            const updateCart = [...cartItems, { _id, price, quantity: newQuantity, name: product.name, image: product.image }]
            setCartItems(updateCart)
        }
        else {
            const updateCart = [...cartItems]
            updateCart[matchedID] = { _id, price, quantity: newQuantity, name: product.name, image: product.image }
            setCartItems(updateCart)
        }
    }

    useEffect(() => {
        const total_price = cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity)
        }, 0)
        const total_quantity = cartItems.reduce((total, item) => {
            return total + item.quantity
        }, 0)
        setTotalPrice(total_price)
        setTotalQuantities(total_quantity)
    }, [cartItems])

    const onRemove = (product) => {
        const updateCart = cartItems.filter((item) => (item._id !== product._id))
        setCartItems(updateCart)
    }

    const toggleCartItemQuanitity = (product, value) => {
        if (value === 'inc') {
            onAdd(product, Number(product.quantity) + 1)
        }
        else {
            onAdd(product, Number(product.quantity) - 1)
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <DataContext.Provider value={{ onAdd, incQty, decQty, qty, showCart, setShowCart, cartItems, setCartItems, totalPrice, setTotalPrice, totalQuantities, setTotalQuantities, onRemove, toggleCartItemQuanitity }}>
            {props.children}
        </DataContext.Provider>
    );
};

export default DataState;