import React, { useState } from 'react'

const FAQForm = () => {
  return (
    <>
      <div className="form-container">

        <div className="forms">
          <div className="question">
            <h3>Is any of my personal information stored in the App?</h3>
            <button className="btn-round">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <div className="expandable">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor
                ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida
                et consequat lobortis arcu velit. Nibh pharetra
                fermentum duis accumsan lectus non. Massa
                cursus molestie lorem scelerisque pellentesque.
                Nisi, enim, arcu purus gravida adipiscing euismod
                montes, duis egestas. Vehicula eu etiam quam
                tristique tincidunt suspendisse ut consequat.
                <br/><br/>
                  Ornare senectus fusce dignissim ut. Integer
                  consequat in eu tortor, faucibus et lacinia
                  posuere. Turpis sit viverra lorem suspendisse
                  lacus aliquam auctor vulputate. Quis egestas
                  aliquam nunc purus lacus, elit leo elit facilisi.
                  Dignissim amet adipiscing massa integer.</p>
              </div>
            </div>
          </div>
            <div className="forms">
              <div className="question">
                <h3>What formats can I download my transaction history in?</h3>
                <button className="btn-round">
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="answer">
                <div className="expandable">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus cum ipsa facere asperiores temporibus minima? Officia nulla excepturi culpa eveniet!</p>
                </div>
              </div>
            </div>
            <div className="forms">
              <div className="question">
                <h3>Can I schedule future transfers?</h3>
                <button className="btn-round">
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="answer">
                <div className="expandable">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque illum beatae a vero voluptate qui voluptatum blanditiis similique enim at sapiente nulla, voluptas tempore aperiam aliquam corporis eum quisquam in!</p>
                </div>
              </div>
            </div>
            <div className="forms">
              <div className="question">
                <h3>When can I use Banking App services?</h3>
                <button className="btn-round">
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
              </div>
              <div className="answer">
                <div className="expandable">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, consequatur.</p>
                </div>
              </div>
            </div>
          <div className="forms">
            <div className="question">
              <h3>Can I create my own password that is easy for me to remember?</h3>
              <button className="btn-round">
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
            <div className="answer">
              <div className="expandable">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id ducimus atque veniam cum debitis at?</p>
              </div>
            </div>
          </div>
        <div className="forms">
          <div className="question">
            <h3>What happens if I forget or lose my password?</h3>
            <button className="btn-round">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <div className="expandable">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, reprehenderit.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default FAQForm
