import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import axios from "axios"
export default class Detail extends Component {
   
    state={
        list:[],
        id:1,
        title:"",
        content:"",
        time:"",
        id:null
    }
    render() {

        console.log(this.props)
        let {list}=this.state
        console.log(list)
        return (
            <div className="wrap">
                <header>
                    <span>&lt;</span>
                    <span>投票详情</span> 
                    <span>
                        <button onClick={()=>{this.props.history.push("/wode/"+this.props.match.params.id)}}>统计</button>   
                    </span>
                </header>
                <section>
                
                <dl>
                        <dt></dt>
                        <dd>
                            <h4>{this.state.title}</h4>
                            <p className="box">
                               <span></span>
                               <span>截止到{this.state.time}</span>
                            </p>
                           
                        </dd>
                    </dl>
                    <p>{this.state.content}</p>
                    <div className="choose">
                        {
                            this.state.list.map((item,index)=>{
                                return <p key={index}><span><input onClick={()=>{this.setState({id:item.id})}} type="radio" name='a'/>{item.title}</span><span>{item.count}票</span></p>
                            })
                        }
                       
                    </div>
                    <h5>
                         <button onClick={this.submitFn}>提交</button>
                    </h5>
                   
                </section>
            </div>
        )
    }
    submitFn=()=>{
        console.log(this.state.id)
        axios.get(`/count?id=${this.state.id}`).then(({s})=>{
            axios.get(`/detail?id=${this.props.match.params.id}`).then(res=>{
                console.log(res.data.newarr.data)
                this.setState({title:res.data.newarr.data[0].titles})
                this.setState({content:res.data.newarr.data[0].content})
                this.setState({time:res.data.newarr.data[0].time})
                 this.setState({
                       list:res.data.newarr.data
                 })
            })
        })
    }
    componentDidMount(){
        axios.get(`/detail?id=${this.props.match.params.id}`).then(res=>{
            console.log(res.data.newarr.data)
            this.setState({title:res.data.newarr.data[0].titles})
            this.setState({content:res.data.newarr.data[0].content})
            this.setState({time:res.data.newarr.data[0].time})
             this.setState({
                   list:res.data.newarr.data
             })
        })
    }
}
