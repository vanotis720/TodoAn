import React, { Component } from 'react';
import MdiDeleteForever from "./MdiDeleteForever";
import SiGlyphChecked from "./SiGlyphChecked";
import IcomoonFreeCheckboxUnchecked from "./IcomoonFreeCheckboxUnchecked";

export default class Todo extends Component {
    render() {
        return (
            <li className="flex justify-between p-3 hover:bg-gray-300 hover:text-black">
                <span onClick={this.props.deleteTodo.bind(this, this.props.todo)} className='hover:bg-red-600 hover:text-dark-200'>
                    <MdiDeleteForever />
                </span>
                {this.props.todo.title}
                {
                    this.props.todo.completed ?
                        <span onClick={this.props.updateCompleted.bind(this, this.props.todo)} className='hover:bg-red-800 hover:text-dark-200 '>
                            <SiGlyphChecked />
                        </span> :
                        <span onClick={this.props.updateCompleted.bind(this, this.props.todo)} className='hover:bg-green-600 hover:text-dark-200 '>
                            <IcomoonFreeCheckboxUnchecked />
                        </span>
                }
                
            </li>
        )
    }
}