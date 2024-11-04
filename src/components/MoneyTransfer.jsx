import React from 'react'
import Container from './Container'
import Checkmark from '../assets/images/p4-checkmark.svg'
import GraphImage from '../assets/images/p4-image-graph.svg'
import CardImage from '../assets/images/p4-image-card.svg'
import IconCard from '../assets/images/p4-icon-card.svg'
import IconWallet from '../assets/images/p4-icon-wallet.svg'

const MoneyTransfer = () => {
  return (
      <section className="section-money">

          <Container>
              <div className='container-grid'>
                <div className="boxes box-1">
                    <h2>Make your Money <br/>transfer simple and clear</h2>
                      <ul className="ul-flex">
                        <li>
                          <img src={Checkmark}/>
                              Banking transactions are free for you
                              </li>
                            <li>
                              <img src={Checkmark}/>
                              No monthly cash commission
                              </li>
                            <li>
                              <img src={Checkmark}/>
                              Manage payments and transactions online
                              </li>
                          </ul>
                            <a className="btn btn-primary" href="#">
                              <span>Learn more</span>
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            </div>
                              <div className="boxes box-2">
                                <img src={GraphImage} alt="snippet from the app of a graph"/>
                              </div>
                            <div className="boxes box-3">
                              <img src={CardImage} alt="snippet from the app showing contacts"/>
                            </div>
                            <div className="boxes box-4">
                              <h2>Receive payment from <br/> international bank details</h2>
                              <div className="icon-boxes">
                                <div className="credit-box">
                                  <img src={IconCard}alt="creditcard icon"/>
                                  <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                                </div>
                              <div className="wallet-box">
                                <img src={IconWallet} alt="wallet icon"/>
                                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                              </div>
                            </div>
                        <a className="btn-primary">
                          <span>Learn more</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
          </Container>
      </section>
  )
}

export default MoneyTransfer
