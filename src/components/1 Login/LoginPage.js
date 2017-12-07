import React from 'react';
import { Image, Button, Container, Header, Icon } from 'semantic-ui-react';

const LoginPage = () => {
  return (
    <div>
      <Container textAlign='center'>
        <br/>
        <Header size='huge'>Synthesis</Header>
        <Image src='https://media.giphy.com/media/wR3yklvpBIgzS/giphy.gif' fluid />
        <div id="login-button">
          <Button animated basic inverted color="green" size="big" href='https://synthesis-k3.herokuapp.com/api/v1/login'>
          <Button.Content visible>Log In to Spotify</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </div>
    </Container>
  </div>
  )
}

export default LoginPage;
