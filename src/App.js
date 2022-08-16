import { useState, useEffect } from "react";

import Header from "./components/Header";
import Input from "./components/Input";

import Button from "@mui/material/Button";
import "./App.css";
import CustomCard from "./components/Card";
import Switch from "./components/Switch"
import Slider from "./components/Slider";
import NativeSelect from './components/NativeSelect';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isMaxVolume, setIsMaxVolume] = useState(30);
  const [quality, setQuality] = useState(2)

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

  return (
    <main>
      <Header title="My Music App" />
      <div className={`App`}>
        {isLoggedIn === false ? (
          <form class="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div>
            <h2>Welcome User!</h2>
            {/* This is where we will put our cards */}
            <div className="dashboard-container">
              <CustomCard
                state={isToggled}
                setState={setIsToggled}
                title="Online Mode"
                body="Is this application connected to the internet?"
                component={Switch}
              />

              <CustomCard
                state={isMaxVolume}
                setState={setIsMaxVolume}
                title="Master Volume"
                body="Listening to music at a high volume could cause long-term hearing loss."
                component={Slider}
              />

              <CustomCard
                state={quality}
                setState={setQuality}
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection."
                component={NativeSelect}
              />
            </div>
              <h4>System Notifications:</h4>
              {/* Where our notifications will go */}
              {isToggled === true && (
                <p>
                  Your application is offline. You won't be able to share or
                  stream music to other devices.
                </p>
              )}
              {isMaxVolume>=80 && (
                <p>
                Listening to music at a high volume could cause long-term hearing loss.
              </p>
              )}
              {quality<2 && (
                <p>
                Music quality is degraded. Increase quality if your connection allows it.
              </p>
              )}
            </div>
          
        )}
      </div>
    </main>
  );
}

export default App;
