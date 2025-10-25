import React from 'react'
import { assets } from '../assets/assets'
import { Star } from 'lucide-react'
import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Background Image */}
      <img
        src={assets.bgImage}
        alt="bg-img"
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
      />

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40 relative z-10">
        {/* Logo */}
        <img src={assets.logo} alt="logo" className="h-12 object-contain" />

        {/* Text and Rating Section */}
        <div>
          {/* Rating Row */}
          <div className="flex items-center gap-3 mb-4 max-md:mt-10">
            <img src={assets.group_users} alt="group-users" className="h-8 md:h-10" />
            <div>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 md:size-5 text-transparent fill-amber-500"
                    />
                  ))}
              </div>
              <p className="text-sm md:text-base text-indigo-900">Used by 10k+ Developers</p>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-6xl font-bold bg-linear-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent md:pb-2">
            Here to connect with wanna be friends.
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md mt-2">
            Connect with people on ReelDeal.
          </p>
        </div>

        <span className="md:h-10" />
      </div>

      {/* Right Section  */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <SignIn />
      </div>
    </div>
  )
}

export default Login
