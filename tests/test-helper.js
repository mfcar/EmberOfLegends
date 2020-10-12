import Application from 'ember-of-legends/app';
import config from 'ember-of-legends/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
