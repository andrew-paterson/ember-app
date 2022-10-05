#! /bin/bash

echo $ENDPOINT

ember serve --live-reload=false --endpoint=$ENDPOINT --port=$PORT
