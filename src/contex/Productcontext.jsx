import { Children, createContext, useEffect, useState } from "react";
// import { product_data } from "../data/Products_data";


export const ProductContext = createContext([]);
export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [invoice, setInvoice] = useState({ count: 0, subtotal: 0 })
    // fetch data from api
    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    //cart function
    const addCart = (product) => {
        console.log(product);
        setCart(oldCart => {
            let previous = [...oldCart];

            if (previous.length < 1) {
                previous.push({ ...product, quantity: 1 });  // Start with a quantity of 1 when adding the first product
            } else {
                const isProduct = previous.find(prod => prod.id === product.id);  // Fixed equality check
                if (!isProduct) {
                    previous.push({ ...product, quantity: 1 });  // Push product with quantity 1 if it's not found
                } else {
                    previous = previous.map(prod => {
                        return prod.id === product.id
                            ? { ...prod, quantity: prod.quantity + 1 }  // Update the quantity of the existing product
                            : prod;  // Leave other products unchanged
                    });
                }
            }
            return previous;
        });
    };
    // console.log(products);

    const setinvoicedata = () => {
        setInvoice(previous => {
            let newInovice = { ...previous, count: 0, subtotal: 0 };

            cart.forEach(product => {
                newInovice.count += product.quantity;
                newInovice.subtotal += product.quantity * product.price;
                console.log(product.quantity * product.price);//
            });
            return newInovice;
        })
    }
    useEffect(() => {
        setinvoicedata()
    }, [cart])

    return (
        <ProductContext.Provider value={{ products, addCart }}>
            {JSON.stringify(invoice)}
            {children}
        </ProductContext.Provider>
    )
};
