import React from 'react';
import { View, Page, LoginScreen, LoginScreenTitle, List, ListItem, Label, Input, ListButton, BlockFooter } from 'framework7-react';

export default ({ onUsernameUpdated, onPasswordUpdated, onLogin, username, password }) => (
  <LoginScreen id="login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListItem>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Username"
              type="text"
              onChange={({ target }) => onUsernameUpdated(target.value)}
              value={username} 
            />
          </ListItem>
          <ListItem>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              onChange={({ target }) => onPasswordUpdated(target.value)}
              value={password}
            />
          </ListItem>
        </List>
        <List>
          <ListButton title="Sign In" onClick={onLogin}></ListButton>
          <BlockFooter>
            <p>Click Sign In to see if you entered the correct password</p>
          </BlockFooter>
        </List>
      </Page>
    </View>
  </LoginScreen>    
);
