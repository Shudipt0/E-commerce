
import banner from '@/public/flash-sale.jpg'
import Image from 'next/image'

export default function FlashSaleBanner() {
  return (
    <div className='w-full'>
      <Image src={banner} className='w-full' />
    </div>
  )
}



