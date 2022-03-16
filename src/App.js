import "./styles.css";
import Webcam from "react-webcam";


export default function App() {
  const WebcamComponent = () => <Webcam />;
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      
      <WebcamComponent/>
    </div>
  );
}
