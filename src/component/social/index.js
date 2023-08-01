import React from 'react'
import twitter from '../../asset/twitter.png'
import facebook from '../../asset/facebook.png'
import youtube from '../../asset/youtube.png'
import linkdin from '../../asset/linkdin.png'
import instagram from '../../asset/instagram.png'

const Social
    = () => {
        return (
            <div className='sm:hidden'>
                <div className='flex w-full justify-center border-b-4 border-neutral-300 pt-4'>
                    <img src={youtube} className='w-3/12' alt='youtube' />
                    <img src={linkdin} className='w-3/12' alt='linkdin' />
                    {/* <img src={instagram} className='w-2/12 text-white' alt='instagram' /> */}
                    <img src={facebook} className='w-3/12' alt="facebook" />
                    <img src={twitter} className='w-3/12' alt="twitter" />
                </div>
                <p className='text-center pt-8'>@2023 Elever Investment adviser private Limited, All rights reserved</p>
                <p className='text-center pt-4'>Privacy Terms Disclosure Inve Charter</p>
            </div>
        )
    }

export default Social
