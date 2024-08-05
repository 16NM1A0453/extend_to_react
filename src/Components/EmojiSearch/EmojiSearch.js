import React, { useEffect, useRef, useState } from 'react'
import './EmojiSearch.css'
import EmojiData from './emoji.json'

const EmojiSearch = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState('')
    useEffect(() => {
        if (search?.length > 3) {
            const newData = EmojiData?.filter((x) => x.title?.toLowerCase()?.includes(search?.toLowerCase()))
            setData(newData);
        } else {
            setData('')
        }
    }, [search])
  return (
    <div className='emojiSearch' id='emojiSearch'>
      <center className='emojiBox'>
        <h1 className='emojiSearchTitle'>Emoji Search</h1>
        <input
          type="text"
          name="searchBar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='emojiInput'
        />
        <div className='dataFound'>
            {data && data?.map((emoji) => <li>{emoji.symbol} {emoji.title}</li>)}
        </div>
      </center>
      
    </div>
  );
}

export default EmojiSearch
