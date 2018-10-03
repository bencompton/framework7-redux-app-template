import React, { Component } from 'react';
import { Page, Navbar, Block, Link } from 'framework7-react';

export default ({ onGoBackToHomePage, url, path, hash, query }) => (
  <Page>
    <Navbar title="Dynamic Route" backLink="Back" onBackClick={onGoBackToHomePage} />
    <Block strong>
      <ul>
        <li><b>Url:</b> {url}</li>
        <li><b>Path:</b> {path}</li>
        <li><b>Hash:</b> {hash}</li>
        <li><b>Query:</b>
          <ul>
            {Object.keys(query).map(key => (
              <li key={key}><b>{key}:</b> {query[key]}</li>
            ))}
          </ul>
        </li>
      </ul>
    </Block>
    <Block strong>
      <Link onClick={onGoBackToHomePage}>Go back to home page</Link>
    </Block>
  </Page>
);
