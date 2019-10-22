import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class Toupiao extends Component {
    render() {
        return (
            <div className="wrap">
                <header>
                            <span>&lt;</span>
                            <span>投票</span>
                            <span>
                                <NavLink to="/faqi">发起投票</NavLink>
                            </span>
                 </header>


                <section>


                </section>
            </div>
        )
    }
}
