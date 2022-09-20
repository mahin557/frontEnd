import './Header.css';
import headerpng from './img/header.png'

function Header() {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 yu">
            一般社団法人日本外国人材協会は外国人人材及び採用する企業、これらを取り巻く関係者のための環境づくりを致します
          </div>
        </div>
        
        <img src={headerpng} alt="HeaderImage" />
        <p>一般社団法人 <span>日本外国人材協会</span></p>
        
        <div className="row">
          <div className="col-md-12 io"> HOME│日本外国人材協会とは│求人一覧│委員会活動│会員一覧│年間スケジュール│業界イベント│<span>入会のご案内</span>｜お問合せ</div>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
