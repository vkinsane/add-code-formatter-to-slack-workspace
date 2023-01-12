// import logo from "./assets/code-formatter-logo.png";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const sendPostRequest = async (code) => {
  const client_id = "4641580529056.4611298528886";
  const client_secret = "31bc8220899a83f05f3f02c18c7c6581";
  await axios
    .post(
      `https://slack.com/api/oauth.v2.access?code=${code}&client_id=${client_id}&client_secret=${client_secret}`
    )
    .then((res) => {
      notify("Bot installed to your workspace", "info");
    })
    .catch((err) => {
      notify(err.response.data.errorMessage, "error");
    });
};

var notify = (message, notificationType) => {
  toast[notificationType](message, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "info",
  });
};
let code = "";

// window.on = () => {
//   notify("Bot installed to your workspace", "info");
// };
// notify("TEST NOTIFICATION", "info");
//get the code from url
const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

code = params.code;

if (code) {
  sendPostRequest(code);
}

function App() {
  //user visits our landing page
  //1. user clicks on add to slack
  //2. user grants permission and we return to our app with code
  //3. send a post request to https://slack.com/api/oauth.v2.access?code=code&client_id=client_id&client_secret=client_secret
  //then show notification to user

  //if we have code value then do a post request to
  //with values
  // https://slack.com/api/oauth.v2.access?code=4641580529056.4638571392161.2b27d12ef54492b94adac7fbb0b65adf0c2067c9a4d0d74c9d315761dd6a9f30&client_id=&client_secret=
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="info"
      />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div
          style={{ height: "100vh" }}
          className="container px-5 py-24 mx-auto flex flex-col"
        >
          <div className="lg:w-4/6 mx-auto  my-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                  <img
                    alt=""
                    // src="https://avatars.slack-edge.com/2023-01-10/4619537860514_fd3e1b2e5c2dbdb645c6_512.png"
                    src="https://i.imgur.com/VDot8dD.png"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-white text-lg">
                    Code Formatter - For Slack{" "}
                  </h2>
                  <p className="text-base text-gray-400">by Zipy.ai </p>
                  <div className="w-12 h-1 bg-yellow-600 rounded mt-2 mb-4" />
                  <p className="text-base text-gray-400">
                    "Make your code look as <br />
                    beautiful as you."
                  </p>
                  <br />
                  {/* <a
                    href="https://slack.com/oauth/v2/authorize?scope=incoming-webhook%2Ccommands&user_scope=&redirect_uri=https%3A%2F%2F76bc-123-201-214-152.in.ngrok.io%2F&client_id=4641580529056.4611298528886"
                    style={{
                      alignItems: "center",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      display: "inline-flex",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      height: "48px",
                      justifyContent: "center",
                      textDecoration: "none",
                      width: "236px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "12px",
                      }}
                      viewBox="0 0 122.8 122.8"
                    >
                      <path
                        d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                        fill="#e01e5a"
                      />
                      <path
                        d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                        fill="#36c5f0"
                      />
                      <path
                        d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                        fill="#2eb67d"
                      />
                      <path
                        d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                        fill="#ecb22e"
                      />
                    </svg>
                    Add to Slack
                  </a> */}
                  <a
                    href="https://slack.com/oauth/v2/authorize?scope=commands&user_scope=&redirect_uri=https%3A%2F%2Fadd-code-formatter-to-workspace.netlify.app%2F&client_id=4641580529056.4611298528886"
                    style={{
                      alignItems: "center",
                      color: "#000",
                      backgroundColor: "#fff",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      display: "inline-flex",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "16px",
                      fontWeight: 600,
                      height: "48px",
                      justifyContent: "center",
                      textDecoration: "none",
                      width: "236px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        height: "20px",
                        width: "20px",
                        marginRight: "12px",
                      }}
                      viewBox="0 0 122.8 122.8"
                    >
                      <path
                        d="M25.8 77.6c0 7.1-5.8 12.9-12.9 12.9S0 84.7 0 77.6s5.8-12.9 12.9-12.9h12.9v12.9zm6.5 0c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9v32.3c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V77.6z"
                        fill="#e01e5a"
                      />
                      <path
                        d="M45.2 25.8c-7.1 0-12.9-5.8-12.9-12.9S38.1 0 45.2 0s12.9 5.8 12.9 12.9v12.9H45.2zm0 6.5c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H12.9C5.8 58.1 0 52.3 0 45.2s5.8-12.9 12.9-12.9h32.3z"
                        fill="#36c5f0"
                      />
                      <path
                        d="M97 45.2c0-7.1 5.8-12.9 12.9-12.9s12.9 5.8 12.9 12.9-5.8 12.9-12.9 12.9H97V45.2zm-6.5 0c0 7.1-5.8 12.9-12.9 12.9s-12.9-5.8-12.9-12.9V12.9C64.7 5.8 70.5 0 77.6 0s12.9 5.8 12.9 12.9v32.3z"
                        fill="#2eb67d"
                      />
                      <path
                        d="M77.6 97c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9-12.9-5.8-12.9-12.9V97h12.9zm0-6.5c-7.1 0-12.9-5.8-12.9-12.9s5.8-12.9 12.9-12.9h32.3c7.1 0 12.9 5.8 12.9 12.9s-5.8 12.9-12.9 12.9H77.6z"
                        fill="#ecb22e"
                      />
                    </svg>
                    Add to Slack
                  </a>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="font-medium title-font mt-4 text-white text-lg">
                  About
                </p>
                <p className="leading-relaxed text-lg mb-4">
                  Current Slack 's in app feature to send code does not have
                  code formatting feature.. Unformatted code is difficult to
                  read and understand. Finding errors in code is difficult. A
                  Slack App which formats users code snippet in a standardized
                  code format. It makes code easier to read and understand. Easy
                  to use compared to existing code block feature of the app. It
                  also detects syntax errors in the code.
                </p>
                <ul style={{ listStyleType: "disc" }}>
                  <p className="font-medium title-font mt-4 text-white text-lg">
                    How to use?
                  </p>
                  <li>
                    {" "}
                    Add Code Formatter to your workspace by clicking the "Add To
                    Workspace" button
                  </li>
                  <li>Authorize Code Formatter to add to your workspace</li>
                  <li>
                    In any converstaion just type command /help to check the
                    languages supported.
                  </li>
                  <li>
                    You can format the code by using this in chatbox.
                    <xmp> "/language-name &lt;your-code&gt;"</xmp>
                  </li>
                  <li>Thank You for installing. Happy Coding. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
