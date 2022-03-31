import React from "react";

const Header = () => {
  return (
    <>
      <div className="ui pointing menu" style={{padding: '4px 30px'}}>
        <a className="item active">GOGOGO SHOP</a>
        <div className="right menu">
          <div class="ui vertical animated button" tabindex="0">
            <div class="hidden content">Shop</div>
            <div class="visible content">
              <i class="shop icon"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
