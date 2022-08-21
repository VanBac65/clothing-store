import React, { Fragment } from 'react'
import NewPosts from './newPosts'
import Title from './title'

export default function TitleNew() {
    return (
        <Fragment>
            <Title title='Tin tức mỗi ngày' />
            <div>
                <NewPosts />
            </div>
        </Fragment>

    )
}
