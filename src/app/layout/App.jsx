import React, { Component, Fragment } from 'react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/testArea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';
import LoadingComponent from './LoadingComponent';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { UserisAuthenticated } from '../../features/auth/authWrapper';
import NotFound from './NotFound';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <LoadingComponent inverted={true} />;
  return children;
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path='/' component={HomePage} />
        <Route
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <AuthIsLoaded>
                <Container className='main'>
                  <Switch key={this.props.location.key}>
                    <Route exact path='/events' component={EventDashboard} />
                    <Route path='/events/:id' component={EventDetailedPage} />
                    <Route
                      path='/people'
                      component={UserisAuthenticated(PeopleDashboard)}
                    />
                    <Route
                      path='/profile/:id'
                      component={UserisAuthenticated(UserDetailedPage)}
                    />
                    <Route
                      path='/settings'
                      component={UserisAuthenticated(SettingsDashboard)}
                    />
                    <Route
                      path={['/createEvent', '/manage/:id']}
                      component={UserisAuthenticated(EventForm)}
                    />
                    <Route path='/test' component={TestComponent} />
                    <Route component={NotFound} />
                  </Switch>
                </Container>
              </AuthIsLoaded>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
