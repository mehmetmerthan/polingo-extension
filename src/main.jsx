import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);
const theme = {
  overrides: [defaultDarkModeOverride],
};
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme} colorMode={"dark"}>
      <Authenticator.Provider>
        <Authenticator>
          <App />
        </Authenticator>
      </Authenticator.Provider>
    </ThemeProvider>
  </StrictMode>
);
