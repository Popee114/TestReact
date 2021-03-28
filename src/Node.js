import React from 'react';
import './index.css';

export class Node extends React.Component {
    getId = (e) =>{
        this.props.getId(e)
    }

    render(){
        return(
            <React.Fragment>
                <div onClick={() => this.getId(this.props.data)}>{this.props.data.textNode}</div>
                {this.props.data.nodes.map(item => (
                    <div onClick={() => this.getId(item)}>
                        {item.nodes && item.nodes.length > 0 ? <Node data={item} getId={this.getId}/> : <div>{item.textNode}</div>}
                    </div>
                ))}
            </React.Fragment>
        )
    }
}








