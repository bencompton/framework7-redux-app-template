import React from 'react';
import { Popup, View, Page, Navbar, NavRight, Link, Block } from 'framework7-react';

export default ({ onClosePopup }) => (
  <Popup>
    <View>
      <Page>
        <Navbar title="Popup">
        <NavRight>
            <Link onClick={onClosePopup}>Close</Link>
        </NavRight>
        </Navbar>
        <Block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</Block>
      </Page>
    </View>
  </Popup>
);
