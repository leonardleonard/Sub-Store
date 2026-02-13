// This file is used to force Vercel to include dependencies that are used via eval()
// Vercel's static analysis might miss these otherwise.

import 'express';
import 'body-parser';
import 'cron';
import 'dotenv';
import 'undici';
import 'fetch-socks';
import 'http-proxy-middleware';
import 'mime-types';
import 'connect-history-api-fallback';
import '@maxmind/geoip2-node';
import 'ip-address';
import 'jsrsasign';
import 'nanoid';
import 'semver';
import 'static-js-yaml';
import 'lodash';
import 'ms';
import 'dns-packet';

console.log('Dependencies loaded for Vercel');
