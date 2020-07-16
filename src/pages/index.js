import Link from 'next/link';
import { Component } from 'react';
// import axios from 'axios';

class Index extends Component{
    state=({
        isvisiable:false
    })
    componentDidMount(){
        this.isWeiXin();
    }
    isWeiXin(){
        if(navigator.userAgent.toLowerCase().indexOf("micromessenger") !== -1){
            this.setState({
                isvisiable:true
            })
        }else{
            this.setState({
                isvisiable:false
            })
        }
    }
    render(){
        return (
            <div className="relative ">
                <img src="../static/img/all.png"/>
                <div className="absolute z-10 w-1/3 top-1/2 left-1/3 ">
                    <a className="block mb-1/6" href="../static/filebase.apk"><img className="hover:bg-yellow-300" src="../static/img/an.png"/></a>
                    {/* <a href="itms-services:///?action=download-manifest&url=http://192.168.16.28:8080/installIPA.plist"></a><img className="" src="../static/img/ios.png"/> */}
                    <a href="https://testflight.apple.com/join/4JyfjEkI"><img className="hover:bg-yellow-300" src="../static/img/ios.png"/></a>
    
                </div>
                <div className={this.state.isvisiable ? "openfromclass isVis":"openfromclass isVisT"}>
                    <img src="../static/img/zhiyin.png"/>
                </div>
            </div>
        )
    }
}

export default Index