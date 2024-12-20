#!/bin/bash

# Navigate to Android directory
cd android

# Clean and build release
./gradlew clean
./gradlew assembleRelease

# Output path
echo "APK generated at: $(pwd)/app/build/outputs/apk/release/app-release-unsigned.apk"
