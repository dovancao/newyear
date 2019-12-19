import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        name : "",
        click: "" 
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
        click: 1
        })
    }

    changeText = (event) => {
        this.setState({
        name: event.target.value
        })
    }

    render() {
        let mHtml;
        if(this.state.name === "Phạm Trung Hiếu" && this.state.click=== 1){
        mHtml = (
          <div className="Dong_Vu" style={{width: "100px", height: "100px", margin: "0 auto", textAlign: "center"}}>
            <h2>Nguyễn Hồng Nga</h2>
            <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/18/19/87/c1/d4/e9/a0/e4d0aa2f8c785e5d7ee7c0e2f0e55bac/c432ac3a2d839cc880bfb99d4012269e_907826_SLH53EXH5MYYR.jpg"></img>
          </div>
      )
    } else if (this.state.name === "Nguyễn Hồng Nga" && this.state.click === 1) {
      mHtml = (
        <div className="Hien" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Sơn Đỗ</h2>
          <img style={{width: "100px", height: "100px"}} src=""></img>
        </div>
      )
    } else if (this.state.name === "Đức Nghĩa" && this.state.click === 1){
      mHtml = (
        <div className="trang" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Hatter Minh</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/4c/8e/f9/d3/b2/fd25806d7682f3b3ac5c98bb96ef96ab/c53c7cd5db2c5455c158daa33ad6d1c1_110766_MFEQT7VFQ6AP6.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Thùy Trang" && this.state.click === 1){
      mHtml = (
        <div className="phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Doanh Quảng Đặng</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/cc/1d/3f/f4/68/87e7e263ee48714ac0544fe946b5b1a2/7767c61ba11235be6808c46dcc862527_172557_CZUYTRKQYQ63P.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Trần Minh" && this.state.click === 1 ) {
      mHtml = (
        <div className="phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Thùy Trang</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/2d/31/d5/a2/5f/4d12682b12a99c13ad177ef0fd83ca76/0607adc8e0508961ba178856ab125386_218210_SRZHBAXAG3QRC.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Quỳnh Hương" && this.state.click === 1) {
      mHtml = (
        <div className="huong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Phạm Trung Hiếu</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/1f/fd/dd/28/0f/eecf80a6182b9fae823ae50e55b602a5/27e4f473109421ff8e50bee8ba84529f_503930_LFMLUJX4XM5EU.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Thúy Vân Trần" && this.state.click === 1) {
      mHtml = (
        <div className="Trong Manh" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Trần Minh</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/dc/ee/a8/f9/07/d6736137bed400c73626cb3f5512a274/beccfbbebd556037ec3cbfeeb9c46317_196447_RLNQSNJWSUZ2F.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Sơn Đỗ" && this.state.click === 1) {
      mHtml = (
        <div className="Thanh" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
          <h2>Quỳnh Hương</h2>
          <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/91/c7/2b/00/0e/c04ed11c50bd1a91628e05061dac403d/e39d20157a0bf9ecb9a3dbdf986b1c44_610051_LLJWQM6SKG55F.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Doanh Quảng Đặng" && this.state.click === 1) {
      mHtml = (
        <div className="Phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
           <h2>Đức Nghĩa</h2>
           <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/53/61/28/df/ea/e45c0e022eb08873e41b58a8b1cdf041/e39d20157a0bf9ecb9a3dbdf986b1c44_415118_QXWN866WG8GYN.jpg"></img>
        </div>
      )
    } else if (this.state.name === "Đông Vũ" && this.state.click === 1) {
        mHtml = (
          <div className="Phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
             <h2>Thúy Vân Trần</h2>
             <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/84/cf/76/fb/e4/d182ceac529441e5213378b9c482625b/7ef6c6c0212a4fbc30e35632137a4b27_638294_FEDNFSZEC4JCL.jpg"></img>
          </div>
        )
      }
      else if (this.state.name === "Kang wolf" && this.state.click === 1) {
        mHtml = (
          <div className="Phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
             <h2>Đông Vũ</h2>
             <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/17/15/00/3d/41/1c/d3/25ef5a0f419f5be3feff8bb2885c814a/7767c61ba11235be6808c46dcc862527_604480_YZV46FN4MGQA3.jpg"></img>
          </div>
        )
      }
      else if (this.state.name === "Hatter Minh" && this.state.click === 1) {
        mHtml = (
          <div className="Phuong" style={{width: "100px", height: "100px", textAlign: "center",  margin: "0 auto"}}>
             <h2>Kang wolf</h2>
             <img style={{width: "100px", height: "100px"}} src="https://data-main.basecdn.net/201912/sys1/drive/19/21/2b/a9/63/2d/d0/6283545614b36ca21783d005bae1c13b/c0467b19685fe8dc8b5961924ed330a0_934758_KRSDY9QALBNMR.jpg"></img>
          </div>
        )
      }


    return (
      <div className="App">
        <div className="container">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="input">Nhập tên facebook của bạn</label>
              <input type="text" placeholder="Đỗ Sơn" id="input"
                onChange={this.changeText}
              ></input>
            </div>
          </form>
          {mHtml}
        </div>
      </div>
    );
  }
}

export default App;
