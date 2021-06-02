import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
    { 
        id: 1, 
        name: 'Nvidia RTX 3090', 
        description: 'Brand new MSI RTX 3090 GPU', 
        price: '$1499.99', 
        image: 'https://www.hardwarecooking.fr/wp-content/uploads/2020/11/test-msi-rtx-3090-gaming-x-trio-05-1536x1024.jpg'
     },
    { 
        id: 2, 
        name: 'Intel i9 10900K', 
        description: 'Intel Core i9-10900K CPU', 
        price: '$529.99', 
        image: 'https://i1.wp.com/www.funkykit.com/wp-content/uploads/2020/05/Intel-10900K-2.jpg?fit=1280%2C720&ssl=1'
    }
]

const Products = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map(product => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} >
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;