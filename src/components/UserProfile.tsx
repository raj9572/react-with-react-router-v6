import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
    const params = useParams<{profileId:string}>()
  return (
    <div>
       user name is {params.profileId}
    </div>
  )
}

export default UserProfile
