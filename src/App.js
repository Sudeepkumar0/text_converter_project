import './App1.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
function App() {
  return (
   <> {/* //fragment */}
  <Navbar title="TEXTCONVETER"/>
  {/* props */}
<div className="container">

  <TextForm heading="Enter the text to analysis"/>
</div>
   </>
  );
}

export default App;
