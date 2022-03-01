import React from 'react';
import classes from './ProductDetails.module.css';
import ProductData from '../ProductData';

const ProductDetails=(props)=>{
    const colorOptions = props.data.colorOptions.map((item,pos) => {
        const classArr=[classes.ProductImage]
        if(pos === props.currentPreviewImagePos){
          classArr.push(classes.SelectedProductImage);
        }
        return(
          <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={() =>props.onColorOptionClick(pos)} />
  
        );
      })

      const featuresList=props.data.featuresList.map((item,pos)=>{
        const classArr=[classes.FeatureItem];
        if(pos === 0){
          classArr.push(classes.SelectedFeatureitem);
        }
        return(
          <button onClick={() => props.onFeatureItemClick(pos)} key={pos} className={classArr.join(' ')}>{item}</button>
          
  
        );
      })
    return(
        <div  className={classes.ProductData}>
        <div className={classes.ProductDetails}>
        <div>
<p>{ProductData.title}</p>
<p>{ProductData.Product}</p>
<p>{ProductData.seller}</p>
<p>{ProductData.State}</p>
<p>{ProductData.Country}</p>

        {colorOptions}
        
           

{/*<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg" alt="Gray color" />
<img className={classes.ProductImage} src="https://cars.usnews.com/static/images/Auto/izmo/i159614297/2020_mercedes_benz_amg_gt_angularfront.jpg" alt="Red color" />
<img className={classes.ProductImage} src="https://cdn.vox-cdn.com/thumbor/EoMqeq4gIuxwEzLfJGbXbeUU0xc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13085897/16C487_001.0.0.1466776615.jpg" alt="Green color" />
<img className={classes.ProductImage} src="https://titaniumluxuryhire.com/blog/wp-content/uploads/2019/05/AMG-GTC-Edition-50.jpg" alt="Black color" />*/}





<div className={classes.featureList}>
{featuresList}

{/*<button className={[classes.FeatureItem,classes.SelectedFeatureitem].join(' ')}>I'm interested</button>
<button className={classes.FeatureItem}>Book Inspection</button>
<button className={classes.FeatureItem}>Have A Query</button>
<button className={classes.FeatureItem}>Submit Feedback</button>*/}
</div>
</div>
</div>
</div>

        
            
        

    );
}
export default ProductDetails;