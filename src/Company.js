import './Company.css';
import img7 from './img/img7.png'
import img8 from './img/img8.png'
import img9 from './img/img9.jpg'
import img10 from './img/img10.png'
import img11 from './img/img11.png'
import img12 from './img/img12.png'

function Company() {
  return (
    <div className="company">
     <div className="container">
     <h3>ダイヤモンドスポンサー</h3>
     <div className="row">
        <div className="col-md-4">
            <img src={img7} alt="" />
            <p>株式会社ビーコス
            外国人人材紹介・派遣、179言語翻訳通訳
            </p>
        </div>
        <div className="col-md-4">
         <img src={img8} alt="" />
         <p>株式会社フューチャー・ デザイン・<br />ラボ
            採用コンサルティング・留学生キャリア支援など
            </p>
        </div>
        <div className="col-md-4">
            <img src={img9} alt="" />
            <p>株式会社OneTerrace <br />
            外国人採用支援・ビザサポート事業
            </p>
        </div>
     </div>
     <h3>ゴールドポンサー</h3>
      <div className="row">
        <div className="col-md-4 d-flex">
            <img src={img10} alt="" />
            <span>株式会社ワールドバリュー ・<br />  ブリッジ
            経営コンサルティング				
            </span>
        </div>
        <div className="col-md-4 d-flex">
          <img src={img11} alt="" />
          <span>株式会社シオン <br />
            ヘルスケア人材関連事業・外国人人材紹介
            </span>
        </div>
        <div className="col-md-4 d-flex">
            <img src={img12} alt="" />
            <span>株式会社エルロン <br />
            日本語教育			
            </span>
        </div>
      </div>
      <h3>シルバースポンサー</h3>
      <div className='d-flex bottom'>
        <span >行政書士法人ＴＲＵＳＴ									
        </span>
        <span className='right'>レバレジーズオフィスサポート株式会社														京都精華大学					
        </span>
      </div>
     </div>  
    </div>



  );
}

export default Company;