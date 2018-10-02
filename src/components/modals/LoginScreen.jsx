import React from 'react';
import { View, Page, LoginScreen, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter } from 'framework7-react';

export default () => (
  <LoginScreen id="login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListItem>
            <Label>Username</Label>
            <Input name="username" placeholder="Username" type="text"></Input>
          </ListItem>
          <ListItem>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password"></Input>
          </ListItem>
        </List>
        <List>
          <ListButton title="Sign In"></ListButton>
          <BlockFooter>
            <p>Click Sign In to see if you entered the correct password</p>
          </BlockFooter>
        </List>
      </Page>
    </View>
  </LoginScreen>    
);
