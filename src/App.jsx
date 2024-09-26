import Logo from './assets/images/logo.png';
import Compet from './assets/images/compet.jpeg';
import price from './assets/images/price.jpg';
import pred from './assets/images/pred.jpg';
import Navbar from './components/Navbar';
import ImageDisplay from './components/Imagedisplay';
import AnotherImageDisplay from './components/AnotherImageDisplay';
import Dropdown from './components/Dropdown';



const App = () => {
  return (
    <>
      <Navbar/>    

      <Dropdown/>



      {/* Main Content */}
      <div className="flex flex-row container justify-ce mx-auto py-12">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={Compet} alt="Image 1" className=" w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Competitor Analysis</h2>
                <p className="text-gray-700">How Well Do you Know your Competitors?</p>
                <div className="mt-4">
                  <ImageDisplay/>
                </div>
              </div>
            </div>
          </div>
       

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={price} alt="Image 2" className="w-full  h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Price Analysis</h2>
                <p className="text-gray-700">What's your Quote?</p>
                <div className="mt-4">
                <AnotherImageDisplay/>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={pred} alt="Image 3" className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Predictive Analysis Using ML</h2>
                <p className="text-gray-700">Predict their Next Move</p>
                <div className="mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl">Click Me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default App;
