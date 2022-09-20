import './Body.css';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'

function Body() {
  return (
    <div className="body">
      <div className="container">
       <p>一般社団法人外国人人材協会について</p>
       <p>一般社団法人外国人材協会 <span>（ Japan Foreign Human Resources Association ）</span> は、外国人との相互理解及び外国人が																																																
            日本で活躍できる多文化共生社会を目指すことを目的とし、その環境づくりを行っていくために様々な事業を行います。																																																
            我々は、日本人と外国人の壁を取り除き、外国人人材の一時的な受け入れだけでなく、結婚、出産、子育て、そして高齢となっていく中で																																																
            充実した生活がおくれる環境づくりを目指しております。そのために、外国人人材に対する教育機関、企業、地域の理解を深められる活動も																																																
            行って参ります。同時に、外国人人材の日本文化等への理解を深め、生活面からサポートし、																																																
            日本社会で活躍できる人材を育成していくことで、多文化社会での豊かな生活環境作りを目指します。																																																
            </p>
            <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button className='bodybutton'>詳しくは <span>こちら</span></button>
            </div>
            <div className="col-md-4"></div>
            
            </div>
            <div className="row till">
                <div className="col-md-4">
                    <h3>委員会活動</h3>
                    <img src={img1} alt="" />
                    <p>各委員会のとその活動内容について
                    ご紹介致します。					
                    </p>
                </div>
                <div className="col-md-4">
                  <h3>年間スケジュール</h3>
                  <img src={img2} alt="" />
                  <p>各委員会や多くの企業主催イベントやセミナー
                    など学びのある機会を探すことができます。
                  </p>
                </div>
                <div className="col-md-4">
                  <h3>参加している会員様一覧</h3>
                  <img src={img3} alt="" />
                  <p>会員の企業様の事業などをご紹介
                  致します。						
                  </p>
                </div>
            </div>
            <div className="row jill">
              <div className="col-md-4">
                <h3>イベント情報</h3>
                <img src={img4} alt="" />
                <p>2020年6月12日（金）
               <br /><span>一般社団法人　日本外国人材協会
                オープニング・イベント</span> 
               </p>
              </div>
              <div className="col-md-4">
                <h3 style={{ visibility:"hidden" }} >No display</h3>
                <img src={img5} alt="" />
                <p style={{ color:"red" }}>2020年10月2日（金）10：00-17：00
                   <br /> <span style={{ fontweight: "bold"}}>外国人新入社員研修</span>  <br />		
                    場所：東京八重洲（予定）
                    </p>

              </div>
              <div className="col-md-4">
                <h3 style={{ visibility:"hidden" }} >No display</h3>
                <img src={img6} alt="" />
                <p style={{ color:"red" }}>第１部：2020年12月3日（木）18：30-20：30
                  第２部：2020年12月10日（木）18：30-20：30
                 <span style={{ fontweight: "bold"}}>外国人新入社員研修	</span> 		 
                  <br /> ※オンラインで開催			 
                  </p>
              </div>
            </div>
            <div className="row kill">
              <div className="col-md-4">
                <button className='bodybutton'>詳しくは <span>こちら</span></button>
              </div>
              <div className="col-md-4">
                <button className='bodybutton'>詳しくは <span>こちら</span></button>
              </div>
              <div className="col-md-4">
                <button className='bodybutton'>詳しくは <span>こちら</span></button>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Body;
