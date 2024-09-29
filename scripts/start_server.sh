#!/bin/bash
cd /home/ubuntu/my-node-app
npm install
pm2 stop all
pm2 start app.js
