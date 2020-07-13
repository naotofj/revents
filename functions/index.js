const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const newActivity = (type, event, id) => {
  return {
    type: type,
    eventDate: event.date,
    hostedBy: event.hostedBy,
    title: event.title,
    photoURL: event.hostPhotoURL,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
    hostUid: event.hostUid,
    eventId: id,
  };
};

exports.createActivity = functions.firestore
  .document('events/{eventId}')
  .onCreate((event) => {
    let newEvent = event.data();
    functions.logger.info({ newEvent });
    const activity = newActivity('newEvent', newEvent, event.id);

    functions.logger.info({ activity });
    return admin
      .firestore()
      .collection('activity')
      .add(activity)
      .then((docRef) => {
        return functions.logger.info('Activity created with ID: ', docRef.id);
      })
      .catch((err) => {
        return functions.logger.info('Error adding activity', err);
      });
  });

exports.cancelActivity = functions.firestore
  .document('events/{eventId}')
  .onUpdate((evt, context) => {
    let updatedEvent = evt.after.data();
    let previousEventData = evt.before.data();
    functions.logger.info({ evt });
    functions.logger.info({ context });
    functions.logger.info({ updatedEvent });
    functions.logger.info({ previousEventData });

    if (
      !updatedEvent.cancelled ||
      updatedEvent.cancelled === previousEventData.cancelled
    )
      return false;

    const activity = newActivity(
      'cancelledEvent',
      updatedEvent,
      context.params.eventId
    );

    functions.logger.info({ activity });

    return admin
      .firestore()
      .collection('activity')
      .add(activity)
      .then((docRef) => {
        return functions.logger.log('Activity created with ID: ', docRef.id);
      })
      .catch((err) => {
        return functions.logger.log('Error adding activity', err);
      });
  });
