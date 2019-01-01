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
            <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
          </div>
      )
    } else if (this.state.name === "Minh Hien Nguyen" && this.state.click === 1) {
      mHtml = (
        <div className="Hien">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Hiền hiền như tên của em vậy</li>
            <li>EM là người khó đoán :)), cảm nhận từ một người đoán người toàn sai như anh</li>
            <li>Anh nhận thấy em là người "sợ nhìn thẳng vào người khác", nếu sợ nhìn thẳng vào người khác thì sẽ rất dễ sợ xã giao, con người như thế thì sẽ khó  đảm trách được công việc nếu tự lực làm gì đó, khó có thể làm một chức vụ cao hơn như điều hành nhiều người khác. ANh thấy hình bóng của anh trong em, thời anh còn ngu ngơ ngây thơ 2 năm trước đây, anh lảng tránh mọi người và luôn tìm một góc dành cho mình. Điều này hoàn toàn sửa được nhé, sửa được thì cuộc sống của em thay đổi nhiều lắm</li>
            <li>Hiền là người dễ dụ. Và cuối cùng em có nét gì giống bạn ngày xưa anh tán, nhưng giờ đây bạn đấy đã có chồng :))</li>
            <li>Hiền xinh, kiểu gu của anh :))</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Chúc em vẫn sẽ mãi bụ bẫm và xinh đẹp</li>
            <li>Chúc em luôn may mắn trong cuộc sống</li>
            <li>Chúc em và gia đình luôn mạnh khỏe và đầm ấm</li>
            <li>Chúc em ngày mai đi làm nhận được thật nhiều niềm vui</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Trang Thùy" && this.state.click === 1){
      mHtml = (
        <div className="trang">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Trang đáng yêu, dễ thương, dễ gần nhưng ko đáng để yêuu :))</li>
            <li>Trang hay cười và mang lại tiếng cười cho mọi người dù mọi người chả hiểu gì</li>
            <li>Trang giúp anh biết ôm một người khác giới cảm giác như nào (người yêu cũ của anh anh chưa từng được ôm)</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Trang forever young</li>
            <li>Trang cứ mãi mãi phơi phới như vậy để giúp thế giới này tràn ngập tiếng cười</li>
            <li>Trang sẽ thành công với những dự định năm 2019 này</li>
            <li>Trang sớm giàu để anh vay tiền(gái tài chính mà)</li>
            <li>Đợi trang tuần tới đi chụp ảnh</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Minh Phương" && this.state.click === 1){
      mHtml = (
        <div className="phuong">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Phương cute theo đúng nghĩa của từ cute: lùn và đáng yêu - nhưng chưa đáng để yêu :))</li>
            <li>Phương ngoan và vâng lời</li>
            <li>Phương rất tốt bụng , toàn cố tình cho mọi người ăn nhiều để mọi người béo</li>
            <li>Phương vòng 3 siêu to</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Phương sẽ thành công và đạt được những dự định của em năm 2019 này</li>
            <li>Phương sẽ mãi mãi tươi tắn và yêu đời như bây giờ</li>
            <li>Và em sớm có người yêu, đông này lạnh lắm </li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Hatter Minh" && this.state.click === 1 ) {
      mHtml = (
        <div className="phuong">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Vẻ ngoài minh có vẻ kiêu kiêu. Nhưng trái lại, Minh là một người rất tỉ mỉ và đáng yêu. Anh rất quý minh</li>
            <li>Minh ăn mặc rất đẹp.</li>
            <li>Minh hay làm mọi người vui vẻ</li>
          </ul>
          <h2>Lời chúc của anh</h2>
            <ul className="antuong">
              <li>Chúc Minh sẽ thành công với dự định sắp tới của em vào năm 2019 này</li>
              <li>Trong tương lai thật gần (2 năm tới) Minh sẽ trở thành một nhà thiết kế thực thụ. và anh muốn là người đầu tiên mua đồ của emmm</li>
              <li>Em luôn phơi phới, bận rộn với công việc yêu thích của mình</li>
            </ul>
            <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Quỳnh Hương" && this.state.click === 1) {
      mHtml = (
        <div className="huong">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>Mắt kính to tròn</li>
            <li>Cười duyên</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Chúc em sẽ thành công trong những dự định sắp tới của em vào năm 2019 này</li>
            <li>Lúc nào cũng gặp may mắn trong cuộc sống cũng như công việc</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Trong Manh" && this.state.click === 1) {
      mHtml = (
        <div className="Trong Manh">
          <h2>Ấn tượng của anh</h2>
          <ul className="antuong">
            <li>To khỏe, vui tính, hòa đồng. Em luôn là tâm điểm khuấy động đám đông, và tạo tiếng cười cho mọi người</li>
            <li>Tỉ mỉ và cẩn thận trong công việc. </li>
            <li>Em là người thông minh, mạnh dạn học hỏi, không sợ người khác chê cười, từ một người mù mờ về tiếng anh mà một năm sau em là con người khác hẳn, anh thực sự cảm thấy ấn tượng với Mạnh</li>
          </ul>
          <h2>Lời chúc của anh</h2>
          <ul className="antuong">
            <li>Chúc em sớm tìm được đam mê của mình và đạt được dự định của mình trong năm 2019</li>
            <li>Luôn thành công trong mọi lĩnh vực em tham gia</li>
            <li>Sớm có bạn gái để anh cảm thấy ghen tị :))</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    } else if (this.state.name === "Thanh Nguyen" && this.state.click === 1) {
      mHtml = (
        <div className="Thanh">
          <h2>Ấn tượng của em</h2>
          <ul className="antuong">
            <li>Anh Thành là người điềm tĩnh, ít nói</li>
            <li>Anh Thành rất chắc chắn và chỉnh chu trong công việc</li>
            <li>Anh Thành có điểm gì đó rất giống em</li>
          </ul>
          <h2>Lời chúc của em</h2>
          <ul className="antuong">
            <li>Anh Thành sẽ đạt được những dự định của mình trong năm 2019 này</li>
            <li>Anh Thành và Cẩm sẽ mãi hạnh phúc và đáng yêu như vậy. Đôi này hợp không tả được</li>
            <li>Anh Thành sẽ làm một sự kiện thật lớn nào nữa, em sẽ là người đầu tiên mua vé của anh</li>
          </ul>
          <h2>HAPPY NEW YEAR</h2>
          <div>Anh Ấn vào link này nhé <a href="https://www.youtube.com/watch?v=YUKJdYZxlYI">https://www.youtube.com/watch?v=YUKJdYZxlYI</a></div>
        </div>
      )
    }


    return (
      <div className="App">
        <div className="container">
          <form className="form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label for="input">Nhập tên facebook của bạn</label>
              <input type="text" placeholder="Đỗ Sơn" id="input"
                onChange={this.changeText}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">Xem lời chúc</button>
          </form>
          {mHtml}
        </div>
      </div>
    );
  }
}

export default App;
