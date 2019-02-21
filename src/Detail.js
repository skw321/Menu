import React, { Component } from 'react';
import './App.css';

function Detail(props) {

    return (
        <div className="detail">
            <table>
                <tr>
                    <th> Name</th>
                    <th> Description</th>
                </tr>
                {props.detail.map((x) => {
                    return (
                        <tr>
                            <td>{x.name}</td>
                            <td>{x.description}</td>
                        </tr>
                    )
                })}

            </table>

        </div>
    );


}


export default Detail;
