import React, { Component } from 'react'
import {BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts'
import axios from 'axios'
export default class Wode extends Component {
    state={list:[], data : []}
    render() {
        
        return (
            <div className="wrap">
                <header>
                    <span>&lt;</span>
                    <span>我的投票</span>
                    <span></span>
                 </header>
                
                 <BarChart width={730} height={250} data={this.state.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
    componentDidMount(){
        console.log()
        let list=[]
        let obj={}
        axios.get(`/total?id=${this.props.match.params.id}`).then(({data})=>{
            data.newarr.data.map(item=>{
                let obj={
                    "name":item.title,
                    "uv":item.count
                }
                list.push(obj)
               
                
            })
            console.log(list)
            this.setState({data:list})
        })
    }
}
