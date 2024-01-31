'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import style from './LinkDropdown.module.scss'



const LinkDropdown = ({ data, isRemoving }) => {
  const router = useRouter()
  const Clicked = async (url) => {
    try {
      const somedata = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/page/getonepage`,
        { params: { url } }
      )

      if (somedata.status == 200) {
        console.log(somedata.data.message.pageUrl)
        router.push('/our-colleage/' + somedata.data.message.pageUrl)
      }
    } catch (error) {
      router.push(`${url}`)
    }
  }

  return (
    <div className={style.dropdown}>
      <nav className='overflow-hidden'>
        <div
          className={`${style.container} ${
            isRemoving && style.dropdownRemoving
          }`}
        >
          {data.nestedObjects.map((link, index) => (
            <li
              //	onClick={() => Clicked(link.url)}
              className={style.item}
              key={index}
            >
              {/* {dataFetching.status == 200 && (
								<Link href={'/our-colleage/' + link.url}>{link.text}</Link>
							)}
							{dataFetching.status == 400 && (
								<Link href={link.url}>{link.text}</Link>
							)} */}

              <div
                style={{ cursor: 'pointer' }}
                onClick={() => Clicked(link.url)}
              >
                {link.text}
              </div>
            </li>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default LinkDropdown
