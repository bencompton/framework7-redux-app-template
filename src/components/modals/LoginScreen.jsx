import React from 'react';
import { View, Page, LoginScreen, LoginScreenTitle, List, ListInput, ListButton, BlockFooter } from 'framework7-react';

export default ({ onUsernameUpdated, onPasswordUpdated, onLogin, username, password }) => (
  <LoginScreen id="login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
                  type="text"
                  name="username"
                  placeholder="username any..."
                  info="Your username"
                  value={username} 
                  onInput={({ target }) => onUsernameUpdated(target.value)}
                ></ListInput>
                <ListInput
                  type="password"
                  name="password"
                  placeholder="password!"
                  info="Your password"
                  value={password}
                  onInput={({ target }) => onPasswordUpdated(target.value)}
                ></ListInput>            
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
