import { useEffect, useState } from 'react'
import { getSponsors } from '../../../backend_functions'

export const Sponsors = () => {

  // for sponsors
  const [sponsorsData, setSponsorsData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let data = await getSponsors();
      data = data.concat(data);
      // console.log(data);
      setSponsorsData(data);
    }
    fetchData();
  }, [])

  return (
    <div>
      Sponsors
    </div>
  )
}

