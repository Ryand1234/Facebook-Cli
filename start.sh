#!/bin/bash
apt update&&apt upgrade
npm install
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
mkdir ~/.facebook
mv key.pem ~/.facebook/
mv cert.pem ~/.facebook/
mv .env ~/.facebook/