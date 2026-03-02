import React from 'react'
import { CheckCheckIcon } from 'lucide-react'
import { Mic2 } from 'lucide-react'
import { User,Locate} from 'lucide-react'
function about() {
  return (
    <div>
        <div className='flex gap-12 p-12 justify-center items-center w-full h-full'>
            <div className='w-1/2 border h-full flex flex-col items-left gap-12'>
                <h1 className='text-white'>Meet And Network With More and More People Just Like You!</h1>
                <div>
                <div className='flex gap-2 text-[var(--text-secondary)] '>
                    <CheckCheckIcon color='purple' size = {16}/>
                    <p>AI matches you with compatible people</p>
                </div>
                <div className='flex gap-2 text-[var(--text-secondary)] '>
                    <CheckCheckIcon color='purple' size = {16}/>
                    <p>See compatibility % before joining</p>
                </div>
                <div className='flex gap-2 text-[var(--text-secondary)] '>
                    <CheckCheckIcon color='purple' size = {16}/>
                    <p>Chat before the event in group rooms</p>
                </div>
                <div className='flex gap-2 text-[var(--text-secondary)] '>
                    <CheckCheckIcon color='purple' size = {16}/>
                    <p>Earn points for attending together</p>
                </div>
                <div className='flex gap-2 text-[var(--text-secondary)] '>
                    <CheckCheckIcon color='purple' size = {16}/>
                    <p>Organize your own private event or join them using private room codes</p>
                </div>
                </div>
                <div>
                    <button className='btn-primary'>Explore Group Rooms</button>
                </div>
                
            </div>
            <div>

            </div>
            <div className='w-1/2  h-full flex flex-col items-left gap-12'>
                <div className='glass flex flex-col gap-5 p-4 rounded-lg'>
                    <div className='flex gap-3 items-center' >
                        <Mic2 color='purple' size={24}/>
                        <div>
                            <h3 className='text-white'>Lisa Concert</h3>
                            <div>
                                <p className='text-[var(--text-secondary)]'>Chill · Outdoorsy · Tech-Curious</p>
                            </div>
                        </div>

                    </div>
                    <div className='text-[var(--text-secondary)] flex gap-3 items-center'>
                        <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                            <User color='purple' size={16}/>
                        </div >
                                                <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                            <User color='purple' size={16}/>
                        </div>
                                                <div className='p-3 bg-[var(--purple-accent)] rounded-full'>
                            <User color='purple' size={16}/>
                        </div>
                        <div>
                            <p>3 members</p>
                        </div>
                    </div>
                    <div className='bg-[var(--purple-dim)] rounded-lg mr-10 ml-10 p-6 flex flex-col gap-3 items-center'>
                        <p className='text-[var(--text-secondary)]'>Compatibality Score</p>
                        <h4 className='text-[var(--purple-accent)]'>90%</h4>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-4'>
                            <Locate color='purple' size={16}/>
                            <p className='text-[var(--text-secondary)] bg-[var(--purple-dim)] rounded-lg p-3'>Central Park, Tokyo</p>
                        </div>
                        <p className='text-[var(--text-secondary)]'>4kms away</p>

                    </div>
                    <div>
                        <button className="btn-primary">Join Room</button>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}

export default about
