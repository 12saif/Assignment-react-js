import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div>
      <h2></h2>
      <h1>Welcome to the About page of Ambula!</h1>
      <p>
        We are an app-based healthcare platform that connects patients to the
        best healthcare providers across India via Unified Health
        Interface(UHI). Our mission is to bridge communication gaps in
        healthcare delivery and empower individuals to take control of their
        health. With Ambula, you can access top-quality healthcare at your
        fingertips. Trust us to be your partner in building a healthier future.
        Follow us for updates and healthcare tips!
      </p>
<hr/>
      <h2> API </h2>
      <p>
        Import Axios and React into your component.
        <br />
        Define a state variable to hold the response data.
        <br />
        Define a function that calls a function on the imported Axios object to
        make a GET request to your endpoint.
        <br />
        Use the useEffect hook to trigger the fetchData function after the
        initial render.
        <br />
        Display the data using JSX and dot-notation to access data in the
        response object.
      </p>
      <p>API LINK : https://home.openweathermap.org/api_keys</p>
    </div>
  );
}

export default About
