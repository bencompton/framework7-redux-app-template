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
  goToAbout,
  goToForm,
  openLeftPanel,
  openRightPanel,
  openPopup,
  openLoginScreen
}) => (
  <Page>
    <Navbar>
      <NavLeft>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={openLeftPanel}></Link>
      </NavLeft>
      <NavTitle>My App</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconMd="material:menu" link onClick={openRightPanel}></Link>
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
      <ListItem onClick={goToAbout} title="About"></ListItem>
      <ListItem onClick={goToForm} title="Form"></ListItem>
    </List>
    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised onClick={openPopup}>Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised onClick={openLoginScreen}>Login Screen</Button>
        </Col>
      </Row>
    </Block>
    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised onClick={openLeftPanel}>Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised onClick={openRightPanel}>Right Panel</Button>
        </Col>
      </Row>
    </Block>
    <List>
      <ListItem link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></ListItem>
      <ListItem link="/load-something-that-doesnt-exist/" title="Default Route (404)"></ListItem>
    </List>
  </Page>
);
