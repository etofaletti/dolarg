import dolargLogo from './assets/dolarg.png'
import './App.css'
import Rate from './components/Rate'
import DateTime from './components/DateTime'

function App() {

  return (
    <>
      <div>
        <a href="https://www.linkedin.com/in/eliastofaletti/" target="_blank">
          <img src={dolargLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <Rate rateType="oficial" />
        <Rate rateType="blue" />
        <Rate rateType="bolsa" />
        <Rate rateType="cripto" />

        <DateTime />
      </div>
      <p className="read-the-docs">
        Datos obtenidos de <a className='underline-link' href='dolarapi.com' target='_blank'>DolarApi.com</a>
      </p>
    </>
  )
}

export default App
