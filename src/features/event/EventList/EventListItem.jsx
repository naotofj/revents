import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button, Label } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { objectToArray } from '../../../app/common/util/helpers';

class EventListItem extends Component {
  render() {
    const { event } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size='tiny' circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as={Link} to={`/events/${event.id}`}>
                  {event.title}
                </Item.Header>
                <Item.Description>
                  Hosted by {' '}
                  <Link to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link>
                </Item.Description>
                {event.cancelled && (
                  <Label
                    style={{ top: '-40px' }}
                    ribbon='right'
                    color='red'
                    content='Event cancelled'
                  />
                )}
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <p>
            <Icon name='clock' />
            {format(event.date.toDate(), 'EEEE do LLL')} at{'  '}
            {format(event.date.toDate(), 'h:mm a')}
          </p>
          <p>
            <Icon name='marker' /> {event.venue}
          </p>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              objectToArray(event.attendees).map((attendee) => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
        </Segment>
        <Segment clearing>
          <Button
            as={Link}
            to={`/events/${event.id}`}
            color='teal'
            floated='right'
            content='View'
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;
