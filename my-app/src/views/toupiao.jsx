import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import axios from 'axios'
import "../css/toupiao.css"
export default class Toupiao extends Component {
  state={
      list:[]
  }
    render() {
        let {list}=this.state
        console.log(this.props)
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
                      <div className="conlist"><span>全部</span><span>已结束</span><span>正在进行</span></div>
                      <div className="content">
                            {
                                list.map((item,index)=>{
                                    return <div className="contents" key={index} onClick={()=>{
                                        this.props.history.push(`/detail/${item.id}`)
                                    }}>
                                        <p className="left"><img className="imgs" src="https://dummyimage.com/70x70" alt=""/></p>
                                        <div className="right">
                                            <div className="top"><span>{item.title}</span>
                                                <span>截止到{item.time}</span>
                                            </div>
                                            <div className="bottom">
                                                <p>{item.content}</p>
                                                <p>{item.choice}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                      </div>
                     
                </section>
            </div>
        )
    }
    componentDidMount(){
        axios.get('/list').then(({data})=>{
            this.setState({
                list:data.result
            })
        })
    }
}
