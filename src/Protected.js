import React, {Component} from 'react';

class Protected extends Component{
    constructor(props){
       super(props)
        this.state={}
    }


    render(){
        return(
            <div>
                <h1>i am protected</h1>
                </div>
        )
    }
}


export default Protected;