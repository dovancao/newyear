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
    if(this.state.name === "Đông Vũ" && this.state.click=== 1){
      mHtml = (
          <div className="Dong_Vu">
            <h2>Ấn tượng của anh</h2>
            <ul className="antuong">
              <li>Đông rất cao</li>
              <li>Đông rất tỉ mỉ và chau chuốt trong công việc</li>
              <li>Đông rất giỏi đánh DJ</li>
            </ul>
            <h2>Lời Chúc của anh</h2>
            <ul className="antuong">
              <li>Không biết đam mê của em có phải DJ không, nhưng nếu nó là DJ thì, anh hy vọng sẽ được gặp Đông ở một sân khấu thực thụ trong tương lai gần, đừng bỏ lỡ cái em thích và em thực sự bỏ thời gian</li>
              <li>Hãy yêu một cô gái đi nhé, Phương khá thích em với lại em cũng hợp nó đó, tiến đi :D. It nhất là cuộc sống của em sẽ có thêm chút gia vị, biết đâu từ đó anh sẽ không phải thấy một DJ đông vũ nữa, mà là một producer Đông Vũ</li>
              <li>Chúc em năm 2019 này thật nhiều sức khỏe, ra trường sớm, đừng như anh :D</li>
            </ul>
            <h2>HAPPY NEW YEAR</h2>
            <div>Ấn vào link này nhé https://www.youtube.com/watch?v=YUKJdYZxlYI</div>
          </div>
      )
    } else if (this.state.name === "Minh Hien Nguyen" && this.state.click === 1) {
      mHtml = (
        <div className="Hien">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Em Hiền như tên của em vậy</li>
            <li>EM là người khó đoán :)), cảm nhận từ một người đoán người toàn sai như anh</li>
            <li>Anh nhận thấy em là người "sợ nhìn thẳng vào người khác", nếu sợ nhìn thẳng vào người khác thì sẽ rất dễ sợ xã giao, con người như thế thì sẽ đảm trách được công việc nếu tự lực làm gì đó, khó có thể làm một chức vụ cao hơn như điều hành nhiều người khác. ANh thấy hình bóng của anh trong em, thời anh còn ngu ngơ ngây thơ 2 năm trước đây, anh lảng tránh mọi người và luôn tìm một góc dành cho mình. Điều này hoàn toàn sửa được nhé, sửa được thì cuộc sống của em thay đổi nhiều lắm</li>
            <li>Em là người dễ dụ. Và cuối cùng em có nét gì giống bạn ngày xưa anh tán, nhưng giờ đây bạn đấy đã có chồng :))</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Chúc em vẫn sẽ mãi bụ bẫm và xinh đẹp</li>
            <li>Chúc em luôn may mắn trong cuộc sống</li>
            <li>Chúc em và gia đình luôn mạnh khỏe và đầm ấm</li>
            <li>Chúc em ngày mai đi làm nhận được thật nhiều niềm vui</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé https://www.youtube.com/watch?v=YUKJdYZxlYI</div>
        </div>
      )
    }


    return (
      <div className="App">
        <div className="container">
          <form className="form" onSubmit={this.onSubmit}>
            <div class="form-group">
              <label for="input">Nhập tên facebook của bạn</label>
              <input type="text" placeholder="Đỗ Sơn" id="input"
                onChange={this.changeText}
              ></input>
            </div>
            <button type="submit" class="btn btn-primary">Xem lời chúc</button>
          </form>
          {mHtml}
        </div>
      </div>
    );
  }
}

export default App;
