import React, { Fragment } from 'react';
import { KeyBoardManagar } from '@HOC';

import { Instruction, Header, Game, Details } from '@Components';
import { Container, Wave, GameFactoryConsumer } from '@Elements';

import Waves from '@Image/waves.gif';

const Home = ({ eventType }) => {
  return (
    <Container>
      <GameFactoryConsumer>
        {({ values, methods }) => {
          return (
            <Fragment>
              <Header />
              <br />
              <Game eventType={eventType} {...values} {...methods} />
              <br />
              <Instruction />
              <div>
                <Wave className="waves" src={Waves} alt="" />
              </div>
              <br />
              <br />
              <Details
                name={'Boosung Kim'}
                githubURL={'https://github.com/boosungkim'}
                projectURL={'https://github.com/boosungkim/15-puzzle'}
                linkedinURL={'https://linkedin.com/in/boosungk/'}
                twitterURL={'https://twitter.com/bytesofboosung'}
              />
            </Fragment>
          );
        }}
      </GameFactoryConsumer>
    </Container>
  );
};

export default KeyBoardManagar(Home);
