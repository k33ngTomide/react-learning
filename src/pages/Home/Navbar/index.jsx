import logo from '../../../assets/images/Group.png'


export const Navbar =() => {
  return (
    <div>
      <div>
        <img src={logo} alt='logo'/>
        <h2>TheBox</h2>
      </div>

      <div>
        <p>Home</p>
        <p>About us</p>
        <p>Project</p>
        <p>Services</p>
        <p>Contact us</p>
      </div>
    </div>
  )
}
