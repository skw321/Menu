import React, { Component } from 'react';
import './App.css';

function Menu (props) {

    const handleClick = (e) =>{
        props.getDetail(e.target.name);
        //console.log(e.target);
    }

        return (
            <div className="menu">
                <ul className="list">
                    {props.list.map(x => {
                        return (
                            <li>
                                <a
                                    href="#" onClick={handleClick} name={x.short_name}>
                                    {x.name} </a>
                            </li>
                        )
                    })}
    
                </ul>
            </div>
        );
    
    
}


export default Menu;
