import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { google } from 'googleapis';

const CLIENT_ID = '446724292431-hl6ht27rol0tus5rslv59mliar9lvod7.apps.googleusercontent.com'; // Replace with your OAuth Client ID

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fitData, setFitData] = useState([]);

  const handleLoginSuccess = (response) => {
    setIsLoggedIn(true);
    console.log('Login Success:', response);
    // Use access token to make Fit API requests
    fetchFitData(response.accessToken);
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  const fetchFitData = async (accessToken) => {
    const fitness = google.fitness({
      version: 'v1',
      auth: new google.auth.OAuth2(),
    });

    try {
      const response = await fitness.users.dataSources.list({
        userId: 'me',
        auth: accessToken,
      });
      setFitData(response.data);
    } catch (error) {
      console.error('Error fetching Fit data:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Fit Data</h2>
          <ul>
            {fitData.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with Google"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code,token"
          scope="https://www.googleapis.com/auth/fitness.activity.read"
        />
      )}
    </div>
  );
};

export default App;
