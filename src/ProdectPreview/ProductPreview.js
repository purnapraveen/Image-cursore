import React from'react';
import classes from './ProductPreview.module.css'


const ProductPreview=(props)=>{
    
    return(
        <div className={classes.ProductPreview}>
       
            <img src={props.currentPreviewImage} alt="Product Preview" />
        

            </div>
            
            

    );
}
export default ProductPreview;