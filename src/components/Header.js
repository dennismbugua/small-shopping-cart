import React from 'react'
/*counts cart items in the badge*/
export default function Header(props) {
    const { countCartItems } = props
    return (
        <header className="row block center">
            <div>
                <a href="#/mystore"><h1>Small Shopping Cart</h1></a>
            </div>
            <div>
                <a href="#/cart">
                    Cart{' '}
                    {countCartItems ? (
                        <button className="badge">{countCartItems}</button>
                    ): (
                    ''
                    )}
                    </a>{' '}
                <a href="#/signin">SignIn</a>
            </div>
        </header>
        )
}