import StatusButton from './StatusButton'

const Header = ({title}) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <StatusButton />
    </header>
  )
}

export default Header
