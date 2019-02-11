import * as React from 'react';
import { ContactUsForm } from './ContactUsForm';

class App extends React.Component {
  public render() {
    return (
      <div className="mt-3">
        <ContactUsForm />
        {/* TODO - reference "contact us" form*/}
      </div>

    );
  }
}

export default App;
