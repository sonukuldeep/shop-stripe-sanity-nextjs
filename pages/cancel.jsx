import React from 'react'
import Link from 'next/link'

const cancel = () => {
    return (
        <>
            <div>Something when wrong</div>
            <Link href="/">
                <button type="button" width="100px" className='btn'>Go back home</button>
            </Link>
        </>
    )
}

export default cancel