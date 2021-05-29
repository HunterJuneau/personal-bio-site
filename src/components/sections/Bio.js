import React from 'react';

export default function Bio() {
  return (
    <>
      <div className='text-center my-5'>
        <h1>Front End Developer {'&'} Student</h1>
        <h5>I am a small town developer with big ideas.</h5>
        <img src='https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/149790352_2870504993171228_7166926582908266959_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=z3IFtT70e2sAX8R2J9R&_nc_ht=scontent-atl3-1.xx&oh=40634ea601b80ae521337e5e1c357cee&oe=60D97480' alt='Hunter Juneau' className='w-25 rounded border' id='myImg'></img>
      </div>
      <div className='text-center px-auto mx-2' id='bioContainer'>
        <h2>Hi, My Name Is Hunter</h2>
        <p className='mx-auto p-4' id='bio'>
          Since I started my learning at Nashville Software School I have
          progressed a lot as a developer and a person. Working in teams, doing
          code challenges, and 1 on 1s have all helped me learn how to
          learn.
        </p>
      </div>
    </>
  );
}
