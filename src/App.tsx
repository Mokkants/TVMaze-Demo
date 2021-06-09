import React, { useState } from 'react';
import Router from './routes';

import { newTheme } from 'src/theme';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

import NetworkSpeed from 'network-speed';
import SlowInternetSnackbar from './shared/components/SlowInternetSnackbar';

const muiTheme = createMuiTheme(newTheme);

const testNetworkSpeed = new NetworkSpeed();

async function getNetworkDownloadSpeed() {
  const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
  const fileSizeInBytes = 500000;
  const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
  return speed;
}

const App = () => {
  const [isSlowInternetSnackbarOpen, setIsSlowInternetSnackbarOpen] = useState(false);

  void getNetworkDownloadSpeed().then(response => {
    setIsSlowInternetSnackbarOpen(parseFloat(response.kbps) < 6000);
  });

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className="App">
        <SlowInternetSnackbar
          isOpen={isSlowInternetSnackbarOpen}
          setIsOpen={setIsSlowInternetSnackbarOpen}
        ></SlowInternetSnackbar>
        <Router />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
