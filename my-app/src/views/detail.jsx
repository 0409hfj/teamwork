import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Detail extends Component {
    render() {
        return (
            <div className="wrap">
                <header>
                    <span>&lt;</span>
                    <span>投票详情</span> 
                    <span>
                        <NavLink to="/wode">统计</NavLink>   
                    </span>
                </header>
                <section>
                    
                </section>
            </div>
        )
    }
}
