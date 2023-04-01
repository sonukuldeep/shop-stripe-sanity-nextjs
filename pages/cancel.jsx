import React from 'react'
import Link from 'next/link'

const cancel = () => {
    return (
        <>
            <div>Something when wrong... If you were charged and the transaction failed, it will be refunded in 5 working days</div>
            <Link href="/">
                <button type="button" width="100px" className='btn'>Go back home</button>
            </Link>
        </>
    )
}

export default cancel