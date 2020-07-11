import React from 'react';
import { Grid, Segment, Header, List, Icon, Label } from 'semantic-ui-react';
import { format } from 'date-fns';

const UserDetailedDescription = ({ profile }) => {
  let createdAt;
  if (profile.createdAt) {
    createdAt = format(profile.createdAt.toDate(), 'd MMM yyyy');
  }
  return (
    <Grid.Column width={12}>
      <Segment>
        <Grid columns={2}>
          <Grid.Column width={10}>
            <Header
              icon='address card outline'
              content={`About ${profile.displayName}`}
            />
            <p>
              I am a: <strong>{profile.occupation || '-'}</strong>
            </p>
            <p>
              Originally from <strong>{profile.origin || '-'}</strong>
            </p>
            <p>
              Member Since: <strong>{createdAt}</strong>
            </p>
            <p className="display-linebreak">{profile.about}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header icon='thumbs up outline' content='Interests' />
            {profile.interests ? (
              <List>
                {profile.interests &&
                  profile.interests.map((interest, index) => (
                    <List.Item key={index}>
                      <Label horizontal size='large'>
                        <Icon name='heart' />
                        {interest}
                      </Label>
                    </List.Item>
                  ))}
              </List>
            ) : (
              <p>No interests</p>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedDescription;
