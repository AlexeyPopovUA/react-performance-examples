#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';

import configuration from '../cfg/configuration';
import { FrontEndHostingStack } from '../stacks/front-end/front-end-hosting-stack';

const app = new App();

new FrontEndHostingStack(app, `${configuration.COMMON.project}-front-end-hosting`, {
  env: {
    account: configuration.COMMON.account,
    region: configuration.COMMON.region,
  },
});
