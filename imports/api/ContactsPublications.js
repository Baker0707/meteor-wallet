/** @format */

import { ContactsCollection } from "./ContactsCollection";
import { Meteor } from "meteor/meteor";

Meteor.publish("allContacts", function publishAllContacts() {
  return ContactsCollection.find(); // Live Query
});

Meteor.publish("contacts", function publishAllContacts() {
  return ContactsCollection.find({ archived: { $ne: true } }); // Live Query
});

/*
Meteor.publish("contacts", function publishContacts() {
  const contacts = ContactsCollection.find(
    { archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    }
  );
  console.log(contacts);
  return contacts;
});
*/