import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import logo from '../assets/img/logo-icon.png';

const HomeWrap = styled.div`
padding: 130px 0 50px;
`

const Disclaimer = styled.div`
display: inline-block;
padding: 1.5rem;
background: rgba(0,0,0,0.6);
border: 1px solid #111;
opacity:0.6;
font-size: 14px;
@media (min-width: 768px) {
    margin-top: 8rem;
    font-size: 16px;
}
`

class Home extends Component {

  componentDidMount() {
    document.body.classList.add('is-home');
  }

  componentWillUnmount() {
    document.body.classList.remove('is-home');
  }

  render() {
    return (
      <HomeWrap>
        <div className="container text-center">
          <p><img src={logo} alt="ETH Grants"></img></p>
          <h1>ETH Grants</h1>
          <p className="lead mb-5">Recurring Ethereum funding via token subscriptions powered by meta transactions</p>
          <p className="mb-5"><Link className="btn btn-lg btn-outline-primary mx-3" to="/create">Create A Grant</Link> <Link className="btn btn-lg btn-outline-primary mx-3" to="/list">Fund A Grant</Link></p>
          <Disclaimer>
              <p className="mb-1">Disclaimer: We built this in a weekend!</p>
              <p className="mb-1">You should inspect <a href="https://etherscan.io/address/0x3847033426C5c9AdD7D95E60d32dFb7Cb7304837" target="blank">our smart contract</a> before using.</p>
              <p className="mb-1">100% free and open source! Please <a href="https://github.com/austintgriffith/tokensubscription.com" target="blank">contribute</a>!</p>
              <p className="mb-1">UPDATE! <a href="https://zklabs.io/audits/tokensub.html" target="blank">Contract Audited!</a></p>
          </Disclaimer>
        </div>
      </HomeWrap>
    )
  }
}

export default Home;
