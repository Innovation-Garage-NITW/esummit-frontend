import { useEffect } from 'react'
import { getSponsors } from '../../../backend_functions'

export const Sponsors = () => {

  useEffect(() => {
    getSponsors();
  })

  return (
    <div>
      Sponsors
    </div>
  )
}

