import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// import '@/styles/globals.css'
// import Navbar from './components/navbar' 
// import Dev from './dev/dev'
// import Ilustracao from './ilustration/ilustration'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'

  
// export default function App({ Component, pageProps }) {
  // return(
  //   <BrowserRouter>
  //     <Navbar>
  //       <Routes>
  //         <Route path="/dev" element={<Dev />} />
          
  //         <Route path="/Ilustracao" element={<Ilustracao />} />
  //       </Routes>
  //     </Navbar>
  //   </BrowserRouter>
  // )
//}