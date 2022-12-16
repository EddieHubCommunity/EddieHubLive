# EddieHubLive

### EddieHubLive codebase

#### A map showing the location of all project contributors

![](https://user-images.githubusercontent.com/624760/178152726-19ea99dc-d3bd-4423-852f-309ba8f39d11.png)

# Getting Started

This map shows contributions via websocket and you must be added to the EddieHub API to see your data on the map. Please keep reading for details on how to trigger data events to the map prior to beginning to work on any issues that are related to the data feed.

## How to trigger new data to the feed

1. Open an issue in Support to be added to the API: [Add me to the API](https://github.com/EddieHubCommunity/support/issues/new?assignees=&labels=EddieHub-API-add&template=add-api-user.yml&title=Please+add+me+to+the+EddieHub+API)
2. Start the project with npm or yarn if you have not already
3. In the EddieHubLive repository, edit an existing comment of yours to trigger a new github event which will show up in the map. You may edit as many times as you like to create more data. If you do not have any comments yet, you may add one and then edit for more data. Please do not add a new comment each time test data is required as this will create spam.

Navigate to directory on your machine:

```bash
cd folder/to/clone-into/
```

Clone repository:

```bash
git clone https://github.com/EddieHubCommunity/EddieHubLive
```

Navigate to repository:

```bash
cd ./EddieHubLive
```

Install the dependencies

```bash
npm i
```

Start the development Sever:

```bash
npm run dev
```

Build & production preview

```bash
npm run build && npm run preview
```

# Project Structure

    ├── ...
    ├── components       Contains all page components (HOCs, elements, etc.)
    ├── Environments     Display events
    ├── App.js           Renders all component to create the page
    └──......
    ──package.json     Contains all dependencies

## Learn More About React, Socket.io and setting up and Leaflet.js

To learn more about Vue and Mongodb, take a look at the following resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React and it's installation.
- [Leaflet Documentation](https://leafletjs.com/reference.html) - Learn about Leaflet.js and it's usage
- [Socket.io Documentation](https://socket.io/docs/v4/) - Learn about Socket.io and it's usage

You can check out [the React's GitHub repository](https://github.com/facebook/react/) - your feedback and contributions are welcome!
You can check out [the Leaflet's GitHub repository](https://github.com/Leaflet/Leaflet) - your feedback and contributions are welcome!
You can check out [the Socket.io's GitHub repository](https://github.com/socketio/socket.io) - your feedback and contributions are welcome!
