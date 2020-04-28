import React from 'react';
import logo from './logo.svg';
import SVGPAY from './assets/Group1977.svg'
import CC from './assets/CC.svg'
import CCINATIVED from './assets/CCINATIVE.svg'

function App() {
  return (
    <>
      <div className="container ">
        <div className="leftMenuContainer">
          <div className="content">
            <div className="section1">
              <p>Alterar forma de pagamento</p>
            </div>
            <div className="section2">
              <img src={SVGPAY} />
              <p>Adicione um novo cartão de crédito</p>
            </div>
            <div className="section3">
              <div className="card">
                <img src={CCINATIVED} />
                <div className="cc">
                  <p className="numbers">* * * *&nbsp;&nbsp;* * * *&nbsp;&nbsp;* * * *&nbsp;&nbsp;* * * *</p>
                  <div className="texts">
                  <p className="holder">NOME DO TITULAR</p>
                  <p className="expire">00/00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
