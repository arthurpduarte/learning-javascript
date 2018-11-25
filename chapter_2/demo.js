/* eslint-disable no-console */

'use strict';
const _ = require('underscore');

const sentences = [
    { subject: 'JavaScript' , verb: 'is', object: 'great' },
    { subject: 'Elephants', verb: 'are', object: 'large'},
];

function say({ subject, verb, object}) {
    console.log(`${subject} ${verb} ${object}`);
}

const verbs = _.pluck(sentences, 'verb');
for (let verb of verbs) {
    console.log(`found verb: ${verb}`);
}

say(sentences[0]);