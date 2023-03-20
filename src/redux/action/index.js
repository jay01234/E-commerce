// Add Product to Cart
export const addToCart = (product) => {
    return {
        type : "ADDPRODUCT",
        payload : product
    }
}

// Delete Product to Cart
export const removeToCart = (product) => {
    return {
        type : "REMOVEPRODUCT",
        payload : product
    }
}