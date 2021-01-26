import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


// Components
import { Countdown } from './components/countdown';

interface StateProps {
  theme: any;
}

class App extends React.Component {
  state: StateProps = {
    theme: null,
  }
  componentDidMount() {
    fetch("https://api.koala.io/marketing/v1/device-configurations/alias/web-config", {
      method: 'GET',
      headers: {
        'X-Organization-Id': '1',
      }
    })
      .then(res => res.json())
      .then(
        (result) => this.setState({ theme: result }),
        (error) => console.log(error))
  }
  render() {
    const data = this.state.theme && this.state.theme.data && this.state.theme.data.data;
    console.log(data);
    return (
      this.state.theme && (
        <ThemeProvider theme={data}>
          <Countdown />
        </ThemeProvider>
      )
    )
  }
}

export default App;
