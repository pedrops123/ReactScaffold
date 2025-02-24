import './App.css'
import { components } from './Components/ComponentsModule'
import Routes from './Router/RouterFile';

function App() {

  let menuItems = [
    {id: 1, descprition: "Home", href: '/',class: ''  },
    {id: 2, descprition: "Meus Trabalhos", href: '/meus-trabalhos',class: ''  },
    {id: 3, descprition: "Contato", href: '/contato',class: ''  }
  ];
 
  return (
    <div className="root-component">
      <components.HeaderComponent  items={menuItems}/>
      <div>
           <Routes/>
      </div>
      <components.FooterComponent classParameter="default-components-color  center-flex-box" ParamNameFooter="Pedro Furlan &copy; Todos os direitos reservados. "/>
    </div>
  )
}

export default App
