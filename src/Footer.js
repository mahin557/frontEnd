import './Footer.css';


function Footer() {
  return (
    <div className="footer ">
      <div className="container d-flex flex-row justify-content-between">
        <div >
          <button onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>PageのTOPへ </button> <br />							
          日本外国人協会とは <br />							
          委員会のご紹介							
          年間スケジュール							
          入会のご案内							
          お問い合わせ							 
        </div>
        <div>
          求人一覧 <br />						
          業界イベント<br />					
          利用規約 <br />						
          採用情報 <br />				
          定款	<br />					
          社団法人発起企業						
        </div>
        <div >
          <span style={{ fontWeight:'bold' }}>会員一覧</span>  <br />					
          人材サ ービス	<br />					
          採用コンサルティング<br />						
          日本語教育 <br />							
          外国人向け研修	<br />						
          日本人向け研修							
        </div>
        <div >
          高度人材 <br />				
          特定技能 <br />				
          技能実習生<br />			
          ビザ・士業<br />			
          通訳・翻訳				
							
        </div>
        <div>
          不動産/保障		<br />		
          銀行/送金		<br />		
          通信		<br />		
          海外進出		<br />		
          その他					
        </div>
     
      
      </div>



      
         
    </div>
    
  );
}

export default Footer;



 