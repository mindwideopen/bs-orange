#!/bin/bash
set -e

cd /home/deploy/apps/landing

rm -rf .next
pnpm build

sudo rm -rf /var/www/landing/*
sudo cp -a out/. /var/www/landing/

echo "Landing deployed to /var/www/landing" 
