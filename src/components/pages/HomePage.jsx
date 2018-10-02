import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

export default ({ 
  onGoToAbout,
  onGoToForm,
  onGoToDynamicRoute,
  onGoToDefaultRoute,
  onOpenLeftPanel,
  onOpenRightPanel,
  onOpenPopup,
  onOpenLoginScreen
}) => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={onOpenLeftPanel}></Link>
      </NavLeft>
      <NavTitle>My App</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={onOpenRightPanel}></Link>
      </NavRight>
    </Navbar>
    <Toolbar>
      <Link>Left Link</Link>
      <Link>Right Link</Link>
    </Toolbar>
    <Block strong>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link onClick={onGoToAbout} title="About"></ListItem>
      <ListItem link onClick={onGoToForm} title="Form"></ListItem>
    </List>
    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised onClick={onOpenPopup}>Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised onClick={onOpenLoginScreen}>Login Screen</Button>
        </Col>
      </Row>
    </Block>
    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised onClick={onOpenLeftPanel}>Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised onClick={onOpenRightPanel}>Right Panel</Button>
        </Col>
      </Row>
    </Block>
    <List>
      <ListItem link onClick={onGoToDynamicRoute} title="Dynamic Route"></ListItem>
      <ListItem link onClick={onGoToDefaultRoute} title="Default Route (404)"></ListItem>
    </List>
  </Page>
);
