import { Children, createContext, useEffect, useState } from "react";
import { products_categories } from "../data/Products_data";


export const ProductContext = createContext([]);
export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [invoice, setInvoice] = useState({ count: 0, subtotal: 0 })
    const [message, setMessage] = useState('')
    const [category, setCategory] = useState('smartphones')
    
    // for use category
    const categoryFunc = (category) => {
        setCategory(category)
    }
    // fetch data from api
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [category]); // to use the value in effect hook must be need dependency.

    //cart function
    const addCart = (product) => {
        // console.log(product);
        setMessage(`${product.title} added in the cart`)
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
    const removeCart = (product) => {
        // console.log(product);
        setMessage(`${product.title} remove from cart`)
        setCart(oldCart => {
            let previous = [...oldCart];
            const isProduct = previous.find(prod => prod.id == product.id)
            if (isProduct) {
                const index = previous.indexOf(isProduct)
                previous.splice(index, 1)
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
                // console.log(product.quantity * product.price);
            });
            return newInovice;
        })
    }
    useEffect(() => {
        const timeOut = setTimeout(() => { setMessage("") }, 1500)
        setinvoicedata()
        return () => {
            clearTimeout(timeOut)
        }
    }, [cart])

    return (
        <ProductContext.Provider value={{ products, invoice, addCart, removeCart, cart, setInvoice, setCart, categoryFunc }}>
            {message && <div className="fixed bg-green-400 text-2xl text-center text-white shadow-lg m-w-[250px] p-2 right-15 top-12 rounded-sm">{message}</div>}
            {children}
        </ProductContext.Provider>
    )
};
