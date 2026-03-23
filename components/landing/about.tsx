import React from 'react'
import { CheckCheckIcon } from 'lucide-react'
import { Mic2 } from 'lucide-react'
import { User, Locate } from 'lucide-react'
function about() {
  return (
    <div className="w-full h-full min-h-full flex items-center justify-center">
      <div className='flex gap-50 p-12 w-full max-w-6xl justify-center items-center'>
        <div className='w-1/2 flex flex-col items-start gap-12'>
          <h1 className='text-white'>Meet And Network With More and More People!</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 text-[var(--text-secondary)]'>
              <CheckCheckIcon color='purple' size={16} />
              <p>AI matches you with compatible people</p>
            </div>
            <div className='flex gap-2 text-[var(--text-secondary)]'>
              <CheckCheckIcon color='purple' size={16} />
              <p>See compatibility % before joining</p>
            </div>
            <div className='flex gap-2 text-[var(--text-secondary)]'>
              <CheckCheckIcon color='purple' size={16} />
              <p>Chat before the event in group rooms</p>
            </div>
            <div className='flex gap-2 text-[var(--text-secondary)]'>
              <CheckCheckIcon color='purple' size={16} />
              <p>Earn points for attending together</p>
            </div>
            <div className='flex gap-2 text-[var(--text-secondary)]'>
              <CheckCheckIcon color='purple' size={16} />
              <p>Organize your own private event or join them using private room codes</p>
            </div>
          </div>
          <div>
            <button className='btn-primary'>Explore Group Rooms</button>
          </div>
        </div>
        <div className='w-1/2 flex flex-col items-start gap-12'>
          <div className='glass flex flex-col gap-7 p-12 rounded-lg w-full'>
            <div className='flex gap-7 items-center ml-5'>
              <Mic2 color='purple' size={40} className='bg-[var(--purple-dim)] rounded-lg' />
              <div>
                <h3 className='text-white'>Lisa Concert</h3>
                <div>
                  <p className='text-[var(--text-secondary)]'>Chill · Outdoorsy · Tech-Curious</p>
                </div>
              </div>
            </div>
            <div className='text-[var(--text-secondary)] ml-5 flex gap-3 items-center'>
              <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                <User color='purple' size={16} />
              </div>
              <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                <User color='purple' size={16} />
              </div>
              <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                <User color='purple' size={16} />
              </div>
              <div>
                <p>3 members</p>
              </div>
            </div>
            <div className='bg-[var(--purple-dim)] ml-5 rounded-xl mr-10 p-6 flex flex-col gap-3 items-center'>
              <p className='text-[var(--text-secondary)]'>Compatibality Score</p>
              <h2 className='text-[var(--purple-accent)]'>90%</h2>
            </div>
            <div className='flex flex-col gap-3 ml-5'>
              <div className='flex gap-4 items-center'>
                <Locate color='purple' size={16} />
                <p className='text-[var(--text-secondary)] bg-[var(--purple-dim)] rounded-lg p-3'>Central Park, Tokyo</p>
              </div>
              <p className='text-[var(--text-secondary)]'>4kms away</p>
            </div>
            <div className='ml-5'>
              <button className="btn-primary">Join Room</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
