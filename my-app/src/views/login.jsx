import React, { Component } from 'react'

export class login extends Component {
    render() {
        return (
            <div>login
                
            </div>
        )
    }
}

export default login

// import React, { Component } from 'react'
// import Axios from 'axios';

// export class login extends Component {
//     state={
//         name:"",
//         pwd:""
//     }
//     render() {
//         let {name,pwd}=this.state
//         return (
//             <div>
//                 <p>用户名：<input type="text" value={name} placeholder="请输入你的用户名" onChange={(e)=>{
//                     this.setState({
//                         name:e.target.value
//                     })
//                 }}/></p>
//                 <p>密码：<input type="password" value={pwd} placeholder="请输入密码" onChange={(e)=>{
//                     this.setState({
//                     pwd:e.target.value
//                     })
//                 }}/></p>
//                 <button onClick={()=>{
//                     Axios.get(`/login?name=${name}&pwd=${pwd}`).then(res=>{
//                         if(res.data.code==1){
//                             localStorage.token=res.data.token
//                             this.props.history.push("/toupiao")
//                         }else{
//                             alert("登录失败")
//                         }
//                     })
//                 }}>登录</button>
//             </div>
//         )
//     }
// }

// export default login
