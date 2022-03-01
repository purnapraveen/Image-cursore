import React,{Component} from 'react';
import classes from './App.module.css';
import ProductDetails from './ProdectDeatails/ProductDetails';
import ProductPreview from './ProdectPreview/ProductPreview';
import Topbar from './Toolbar/Topbar';
import ProductData from './ProductData';

class App extends Component{
  state={
    productData:ProductData,
    currentPreviewImagePos:0,
  }

  onColorOptionClick=(pos)=>{
    
    this.setState({currentPreviewImagePos:pos});
  }

  onFeatureItemClick=(pos)=>{
    
  }
    
render(){
    return (
     <div className='App'>
        <Topbar />

        <div className={classes.MainContainer}>
        
          <div className={classes.ProductPreview}>
          <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} />
           
    
          </div>
          
          <div classNam={classes.ProdcutData} >
          <ProductDetails  data={this.state.productData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
          />

      </div>
      </div>
      </div>
    
    
     
      
      
      
          
          
      
        
        
    );
    }
  }

  


export default App;
