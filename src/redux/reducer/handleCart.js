const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDPRODUCT":
            // Check if Product is Already Exist
            const existItem = state.find((item) => item.id === product.id);
            if(existItem) {
                // Add the Quantity
                return state.map((item) => 
                    item.id === product.id ? {...item, qty: item.qty + 1} : item,
                );
            } else {
                const product =  action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case 'REMOVEPRODUCT' :
                const removeExistItem = state.find((item) => item.id === product.id);
                if(removeExistItem.qty === 1) {
                    return state.filter((item) => item.id !== removeExistItem.id)
                } else {
                    return state.map((item) => 
                        item.id === product.id ? {...item, qty: item.qty-1} : item
                    );
                }
            break;

        default:
            return state;
            break;
    }
}

export default handleCart;

// const cart = [];

// const handleCart = (state = cart, action) => {
//     switch(action.type) {
//         case 'ADDPRODUCT':
//             return [
//                 ...state,
//                 action.payload
//             ]
//         break;
//         case 'REMOVEPRODUCT':
//             return state = state.filter((item) => {
//                 return item.id !== action.payload.id
//             })
//         break;

//         default:
//             return state;
//         break;
//     }
// }

// export default handleCart;