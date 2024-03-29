import { FC, useState } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'
import wallpaper from './assets/images/pexels-maxime-francis.jpg'
const App: FC = () => {
  const [fullname] = useState('Bùi Quốc Cường')
  console.log(fullname)
  return (
    <div
      style={{
        background: `url(${wallpaper})`
      }}
    >
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Bài viết được viết acv tại blog {process.env.HOST}</h2>
    </div>
  )
}

export default App
