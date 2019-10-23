import React, { Component } from 'react'
import axios from 'axios'

export default class Faqi extends Component {
    state={title:"",content:"",xuan:"",list:[]}
    render() {
        return (
            <div className="wrap">
                <header>
                    <span>&lt;</span>
                    <span>发起投票</span>
                    <span></span>
                </header>

                <div className="faqi">
                    <p className="ps"><span>标题：</span><input onChange={(e)=>{this.setState({title:e.target.value})}} value={this.state.title} type="text" placeholder="请输入标题"/></p>
                    <p className="ps"><span>描述：</span><input onChange={(e)=>{this.setState({content:e.target.value})}} value={this.state.content} type="text" placeholder="请输入内容"/></p>
                    {
                        this.state.list.map((item,index)=>{
                            return <p className="xx" key={index}>选项{index+1}：{item}</p>
                        })
                    }
                    <p className="xuan"><input type="text" placeholder="请输入选项内容最长输入20个字" onChange={(e)=>{this.setState({xuan:e.target.value})}} value={this.state.xuan}/><span onClick={this.clickFn}>+</span></p>
                </div>

                <button className="fabu" onClick={this.fabuFn}>发布</button>
            </div>
        )
    }
    clickFn=()=>{
        
        if(this.state.xuan){
            this.state.list.push(this.state.xuan)
            this.setState({})
        }else{
            alert("选项内容不能为空")
        }
        this.setState({xuan:""})
    }
    fabuFn=()=>{
        console.log(this.state.list)
        axios.get("/detail").then(({data})=>{
            console.log(data)
        })
       if(this.state.title&&this.state.content){
            axios.get(`/list?title=${this.state.title}&content=${this.state.content}&list=${this.state.list}`).then(({data})=>{
                console.log(data)
            })
            this.setState({title:""})
            this.setState({content:""})
            this.props.history.push("/toupiao")
       }else{
           alert("内容不能为空")
           this.setState({title:""})
           this.setState({content:""})
       }
        
    }
}
