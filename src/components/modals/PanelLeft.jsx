import React from 'react';
import { Panel, Page, Navbar, Block, BlockTitle, List, ListItem } from 'framework7-react';

export default ({ onGoToAbout, onGoToForm, onClosePanelLeft }) => (
  <Panel left cover themeDark onPanelBackdropClick={onClosePanelLeft}>
    <Page>
      <Navbar title="Left Panel" />
      <Block strong>
        <p>Left panel content goes here</p>
      </Block>
      <BlockTitle>Load page in main view</BlockTitle>
      <List>
        <ListItem link title="About" onClick={onGoToAbout}></ListItem>
        <ListItem link title="Form" onClick={onGoToForm}></ListItem>
      </List>
    </Page>
  </Panel>
);
