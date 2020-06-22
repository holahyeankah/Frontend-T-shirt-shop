// import React, {Componenet} from 'react';
// import {hideCartModal} from './action/ModalAction';
// import {connect} from 'react-redux';
// import {Link} from 'react-router-dom';


// class AddToCartModal extends Componenent{

//     closeModal=()=>{
//         const {hideModal}=this.props;
//         hideModal();
//     }



//     render(){

//         const {show, itemName}=this.props;

//         return (
//             <div style={{display:!show ? 'none': 'block'}}>
//                 <button type="button" onClick={this.closeModal}>
//                     &times
//                 </button>
//                 <div>

                
//             </div >
//             <h3>
//             {itemName}
//             { '' }
//             added to cart
//             </h3>
//             <div>
//                 <Link to="/">
//                     <Button type="button" onClick={this.closeModal}>
//                         CONTINUE
//                     </Button>
//                 </Link>
//                 <Link to="/productcart">
//                 <Button type= "button" onClick={this.closeModal}>

//                CONTINUE

//                 </Button>
//                 </Link>
//             </div>
            
            
            
            
//             </div>
            
//         )
//     }
//     }

  
//     const mapDispatchToProps=dispatch=>({
//         hideModal:()=>{dispatch(hideCartModal())}


//     });


//     export default connect(null, mapDispatchToProps)(AddToCartModal);