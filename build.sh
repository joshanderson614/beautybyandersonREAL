#!/bin/bash

# Create a build script for Beauty by Anderson website
# This script creates a static build of the website in the build directory

# Create build directory
mkdir -p build

# Copy HTML files
cp *.html build/

# Copy CSS files
cp styles.css build/

# Copy JavaScript files
cp transitions.js build/

# Copy favicon files
cp favicon.ico build/
mkdir -p build/favicon
cp -r favicon/* build/favicon/

# Copy images
mkdir -p build/images
cp -r images/* build/images/

echo "Build completed successfully! Files are in the build directory."