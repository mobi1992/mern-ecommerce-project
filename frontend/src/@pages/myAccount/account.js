import React, { useEffect, useState } from 'react'
import './index.css'
import AccountLayout from '../../@components/accountLayout'
const MyAccount = ({ userDetails }) => {
  const [userInfo, setUserInfo] = useState(undefined)
  useEffect(() => {
    setUserInfo(userDetails)
    // setNoUserDetails(false)
    // console.log('user details', userInfo.user)
  }, [userDetails])

  return (
    <AccountLayout>
      <div>
        <p style={{ display: 'inline' }}>Hello</p> <p style={{ fontWeight: 'bolder', display: 'inline' }}>{userDetails.user.name} !</p>
      </div>
      <p style={{ display: 'inline' }}>From your account dashboard you will be able to view </p> <p className='my-account' style={{ display: 'inline' }}> recent orders</p>, <p style={{ display: 'inline' }}>manage your </p> <p className='my-account' style={{ display: 'inline' }}>addresses</p><p style={{ display: 'inline' }}>, and edit your </p> <p className='my-account' style={{ display: 'inline' }}>account details</p><p style={{ display: 'inline' }}> and </p> <p className='my-account' style={{ display: 'inline' }}>passwords</p>
    </AccountLayout>
  )
}

export default MyAccount