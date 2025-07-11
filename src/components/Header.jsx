function Header() {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '2rem', color: 'white', textAlign: 'center' }}>
        <img 
        src="/profile-pic.jpeg" 
        alt="Krishnan S" 
        className="profile-pic"
        />
      <h1>Krishnan S</h1>
      <p>Web Developer | Learner | Tech Explorer</p>
    </header>
  )
}

export default Header
