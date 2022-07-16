import React from 'react'

const MyInfo = () => {
  const aboutMeText =
    "I'm a curious guy, always ask questions about everything, which is why I love digging deeper about anything triggering my curiousness. Besides, i love music because i was born in a musical-soul family, which leads me to this IT career after i accidentally watched a video about the chord 'C#'.  Yes, I was hooked with C# programming language, but today, i choose to be a front-end Developer because it's simply the best suit for me. Finally, i love working as a team because i can share my ideas also absorb knowledge from my colleagues."
  return (
    <div className='myInfo' id='profileSection'>
      <div className='topText' style={{ borderBottom: '2px solid black' }}>
        <h1
          style={{ fontFamily: 'fantasy', color: 'gray', letterSpacing: '3px' }}
        >
          <bold>MY PROFILE</bold>
        </h1>
        <p>I'm a front-end Developer specialized in React</p>
      </div>

      <div className='myPortfolio'>
        <h2
          style={{ color: 'gray', letterSpacing: '1px', fontFamily: 'fantasy' }}
        >
          About Me
        </h2>

        <p>{aboutMeText}</p>
      </div>
      <img
        className='ui medium circular image'
        src={require('./pic/profile.jpg')}
        style={{ border: '5px solid lightblue' }}
      ></img>
      <div className='myPortfolio'>
        <h2
          style={{ letterSpacing: '1px', fontFamily: 'fantasy', color: 'gray' }}
        >
          My Personal Detail
        </h2>
        <h3>
          <bold>Name:</bold>
        </h3>
        <p>Phat Minh Thanh Truong (Peter)</p>
        <h3>
          <bold>Date of Birth</bold>
        </h3>
        <p>14/04/1993</p>
        <h3>
          <bold>Nationality:</bold>
        </h3>
        <p>Viet nam</p>
        <h3>
          <bold>Current Adress:</bold>
        </h3>
        <p>Kings Park, VIC 3021, Australia</p>
        <h3>
          <bold>Hobbies:</bold>
        </h3>
        <p>Coding, Swimming, Lifting, Playing music</p>
      </div>
    </div>
  )
}

export default MyInfo
