import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, Laptop2, LayoutList, SkipForward, Repeat, Mic2, Volume, Maximize2 } from 'lucide-react'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Your Libary
            </a>
          </nav>
          <nav className='mt-6 pt-6 border-t border-zinc-400 flex flex-col gap-3'>

            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Treino</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Jiu Jitsu</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Niver funk</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>My playlist aleatória</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Trap Brasil </a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Funk Mandela</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hip hop Anos 2000</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Rock in Roll</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>BK todas brabas</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Kayblack</a>

          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="" className='bg-white/5 rounded-md group overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>              <Image src="/album.jpg" alt="album racionais" width={100} height={100} />
              <strong>Racionais Mc's</strong>
              <button className='w-12 h-10 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Made for Jesus Vicken de Sousa</h2>

          <div className='grid grid-cols-5 gap-4 mt-4'>
            <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' alt="album MC Ig" width={120} height={100} />
              <strong className='font-semibold'>Daily Mix Mc's</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' alt="album MC Ig" width={120} height={100} />
              <strong className='font-semibold'>Daily Mix Mc's</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' alt="album MC Ig" width={120} height={100} />
              <strong className='font-semibold'>Daily Mix Mc's</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' alt="album MC Ig" width={120} height={100} />
              <strong className='font-semibold'>Daily Mix Mc's</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
            <a href="" className='bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10'>
              <Image src="/album.jpg" className='w-full' alt="album MC Ig" width={120} height={100} />
              <strong className='font-semibold'>Daily Mix Mc's</strong>
              <span className='text-sm text-zinc-400'>Wallows, COIN, girl in red and more</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 px-6 py-4 border-t border-zinc-700 p-6 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src="/album.jpg" alt="album MC Ig" width={56} height={56} />
          <div className='flex flex-col'>
            <strong className='font-normal'>Racionais Mc's</strong>
            <span className='text-xs text-zinc-400'>Jesus Chorou</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle size={24} className='text-zinc-200' />
            <SkipBack size={24} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white bg-white/30'>
              <Play />
            </button>
            <SkipForward size={24} className='text-zinc-200' />
            <Repeat size={24} className='text-zinc-200' />

            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-400'>2:49</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-400'>5:31</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 />
        </div>
      </footer>
    </div>

  )
}
