import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Node} from "./Node";

class Tree extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    textNode: 'MainNode1',
                    nodes: [
                        {
                            textNode: 'Node11',
                            nodes: [
                                {
                                    textNode: 'QWEQE',
                                    nodes: []
                                }
                            ]
                        },
                        {
                            textNode: 'Node12',
                            nodes: []
                        }
                    ]
                },
                {
                    textNode: 'MainNode2',
                    nodes: [
                        {
                            textNode: 'Node21',
                            nodes: []
                        },
                        {
                            textNode: 'Node22',
                            nodes: []
                        }
                    ]
                },
                {
                    textNode: 'MainNode3',
                    nodes: [
                        {
                            textNode: 'Node31',
                            nodes: []
                        },
                        {
                            textNode: 'Node32',
                            nodes: []
                        }
                    ]
                },
            ]
        };
        this.selectedItem = null;
    }

    addNode = () => {
        let addNode = this.state.data;
        if (this.selectedItem === null) {
            addNode.push({
                textNode: prompt("Название: ", "DefaultText"),
                nodes: []
            })
        }
        addNode.map((item) => {
            if (addNode.indexOf(item) === this.selectedItem) {
                item.nodes.push({
                    textNode: prompt("Название: ", "DefaultText"),
                    nodes: []
                })
            }
        })
        this.setState({
            data: addNode
        })
        console.log(this.state.data)
    }

    editTextNode = () => {
        let addNode = this.state.data;
        if (addNode.length === 0) return(alert("Empty"));
        let newText = prompt("Новое название: ", "Node")
        addNode.map((item) => {
            if (addNode.indexOf(item) === this.selectedItem) item.textNode = newText;
        })
        this.setState({
            data: addNode
        })
    }

    removeNode = () => {
        let removeNode = this.state.data;
        {removeNode.map((item) => {
            if (removeNode.indexOf(item) === this.selectedItem) removeNode.splice(this.selectedItem, 1);
        })}
        this.setState({
            data: removeNode
        })
    }

    resetNodes = () =>{
        this.setState({
            data: []
        })
        this.selectedItem = null;
    }

    getId = (item) =>{
        this.selectedItem = this.state.data.indexOf(item);
        console.log(this.selectedItem)
    }

    render(){
        return(
            <div className='window'>
                <h4 align="center">Tree</h4>
                <div className='workspace' onClick={this.selectedItem = null}>
                    {this.state.data.map(item => {
                        return <Node data={item} getId={this.getId}/>
                    })}
                 </div>
                <input type="button" className="my_Button" value="Add" onClick={() => {this.addNode()}}/>
                <input type="button" className="my_Button" value="Remove" onClick={() => {this.removeNode()}}/>
                <input type="button" className="my_Button" value="Edit" onClick={() => {this.editTextNode()}}/>
                <input type="button" className="my_Button" value="Reset" onClick={() => {this.resetNodes()}}/>
            </div>
        )
    }

}

ReactDOM.render(
    <Tree/>,
    document.getElementById("root")
)