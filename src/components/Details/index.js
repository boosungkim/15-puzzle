import React, { Component } from 'react';

import { Footer, Profile, Icon } from '@Elements';

const originalName='Shubham Singh'
const originalGithubURL='https://github.com/imshubhamsingh'
const originalProjectURL='https://github.com/imshubhamsingh/15-puzzle'
const originalLinkedinURL='https://linkedin.com/in/imshubhamsingh97/'
const originalTwitterURL='https://twitter.com/imshubhamsingh_'

const Details = ({ name, githubURL, linkedinURL, twitterURL, projectURL }) => (
  <Footer>
    <div className="text">
      Updated by {name}. 
      Made by {originalName}.
      <br />
      This project is open source, visit{' '}
      <a href={projectURL} target="_blank">
        the repo.
      </a>
    </div>
    <div className="logos">
      <Profile href={githubURL} target="_blank">
        <Icon name="github" />
      </Profile>
      <Profile href={linkedinURL} target="_blank">
        <Icon name="linkedin" />
      </Profile>
      <Profile href={twitterURL} target="_blank">
        <Icon name="twitter" />
      </Profile>
    </div>
  </Footer>
);

export default Details;
