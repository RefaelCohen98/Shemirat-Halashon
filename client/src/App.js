import React , { useEffect, useState }from 'react'

const URL = "https://www.kolhalashon.com/New/Shiurim.aspx?Lang=Hebrew&RavID=-1&ROrder=-1&FID=67446&HideMenus=False"

function ShemiratHalashon() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL, {mode: 'no-cors'})
      console.log(result);
    }
    fetchData()
  }, [])
  
  return (
    // TODO: A add a picture of th Hafetzh-Haim
    <div>Shemirat Halashon!</div>
  )
}

export default ShemiratHalashon