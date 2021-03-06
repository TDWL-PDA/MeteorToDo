import { Template } from 'meteor/templating';
 
import { Tasks } from '../api/tasks.js';
 
import './body.html';23
 
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
'submit .new-task'(event) {
//Prevents default browser from submit
event.preventDefault();

//Get value from form element
const target = event.target;
const text = target.text.value;

//Insert a task into the collection
Tasks.insert({
text,
createdAt: new Date(),  //current time
});

//Clear Form
target.text.value = '';
},
});
