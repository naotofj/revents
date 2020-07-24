import React from 'react';
import { Segment, Button, Header, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const UnderConstruction = ({ history }) => {
  return ( 
    <Segment placeholder padded>
      <Header icon>
        <Icon name='wrench' />
        Oops - this feature is still under construction.
      </Header>
      <br/>
        <Button onClick={() => history.push('/events')} primary>
          Return to Events page
        </Button>
    </Segment>
  );
};

export default withRouter(UnderConstruction);
