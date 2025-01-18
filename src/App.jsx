// import { BrowserRouter, Route, Routes } from 'react-router-dom'

// // 1
// // import './App.css';
// import './styles/styles.css'

// import Particle from './components/Particle'

// import Home from './pages/Home'
// import Registration from './pages/Registration'

// import Mindscape from './pages//tech/Mindscape'
// import Mysticode from './pages/tech/Mysticode';
// import TechTrivia from './pages/tech/TechTrivia'
// import GreyScale from './pages/tech/GreyScale'
// import CyberSleuth from './pages/tech/CyberSleuth'

// import SnapSeek from './pages/nontech/SnapSeek'
// import FilmFrency from './pages/nontech/FilmFrency'
// import ApexConquest from './pages/nontech/ApexConquest'

// import Footer from './components/Footer'

// //2
// import Update from './components/Update'


// function App() {

//   return (
   
//       <BrowserRouter>
//       <Particle />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/registration" element={<Registration />} /> 
          
//           {/* Technical Events */}
//           <Route path='/event/mindscapes-unfold' element={<Mindscape/>} />
//           <Route path='/event/mysticode' element={<Mysticode/>} />
//           <Route path='/event/tech-trivia' element={<TechTrivia/>} />
//           <Route path='/event/greyscale' element={<GreyScale/>} />
//           <Route path='/event/cybersleuth' element={<CyberSleuth/>} />


//           {/* Non-Technical Events */}
//           <Route path='/event/snap-seek' element={<SnapSeek/>} />
//           <Route path='/event/film-frency' element={<FilmFrency/>} />
//           <Route path='/event/apex-conquest' element={<ApexConquest/>} />

//           {/* Test Route - temp */}
//           {/* <Route path='/event/update' element={<Update/>} /> */}
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//   )
// }

// export default App




import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 1
// import './App.css';
import './styles/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'
import Mindscape from './pages//tech/Mindscape'
import Mysticode from './pages/tech/Mysticode';
import TechTrivia from './pages/tech/TechTrivia'
import GreyScale from './pages/tech/GreyScale'
import CyberSleuth from './pages/tech/CyberSleuth'

import SnapSeek from './pages/nontech/SnapSeek'
import FilmFrency from './pages/nontech/FilmFrency'
import ApexConquest from './pages/nontech/ApexConquest'

import Footer from './components/Footer'

//2
import Update from './components/Update'




function App() {
  return (
    <BrowserRouter>
      
      <Particle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} /> 

        {/* Technical Events */}
        <Route path='/event/mindscapes-unfold' element={<Mindscape/>} />
        <Route path='/event/mysticode' element={<Mysticode/>} />
        <Route path='/event/tech-trivia' element={<TechTrivia/>} />
        <Route path='/event/greyscale' element={<GreyScale/>} />
        <Route path='/event/cybersleuth' element={<CyberSleuth/>} />

        {/* Non-Technical Events */}
        <Route path='/event/snap-seek' element={<SnapSeek/>} />
        <Route path='/event/film-frency' element={<FilmFrency/>} />
        <Route path='/event/apex-conquest' element={<ApexConquest/>} />

        {/* Test Route - temp */}
        {/* <Route path='/event/update' element={<Update/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;