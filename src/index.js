import React from 'react';
import ReactDOM from 'react-dom/client';

class DemoComponent extends React.Component {
    render() {
      return(

          <div>
            <h2>Hello {this.props.user}</h2>
            <h3>Welcome to your mom</h3>
          </div>
      )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DemoComponent user='bruh moment'/>
  </React.StrictMode>
);