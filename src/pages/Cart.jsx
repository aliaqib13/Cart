import React from 'react'

const Cart = () => {

    const cartList = [
        {
            id: 1,
            name: "Apple Juice",
            volume: 250,
            inStock: true,
            quantity: 0,
            price: 2.99,
            image: 'https://media.naheed.pk/catalog/product/cache/ed9f5ebe2a117625f6cd6336daddd764/1/2/1219483-1.jpg',
        },
        {
            id: 1,
            name: "Grapes Juice",
            volume: 500,
            inStock: false,
            quantity: 0,
            price: 3.19,
            image: 'https://media.naheed.pk/catalog/product/cache/49dcd5d85f0fa4d590e132d0368d8132/1/0/1033730-1.jpg',
        }
    ]

    return (
        <>
            <div className='container'>
                <div className="cart-conatiner">

                    {cartList.map((item) => (
                        <div className="item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />

                            </div>
                            <div className="item-title">
                                <div className="item-title-heading">
                                    <h1>{item.name}</h1>
                                    <p>{item.volume}</p>
                                    <input type="radio" value={item.inStock} />

                                </div>

                            </div>
                            <div className="item-button">


                            </div>
                            <div className="item-price">

                            </div>
                        </div>))}


                </div>
            </div>
        </>
    )
}

export default Cart