import React from 'react'
import rightArrowBright from '../assets/rightArrowBright.svg'

const Blogs = () => {
    const exampleBlogsJSON = {
        "kind": "blogger#postList",
        "nextPageToken": "CgkIChiAkceVjiYQ0b2SAQ",
        "items": [
            {
                "kind": "blogger#post",
                "id": "7706273476706534553",
                "blog": {
                    "id": "2399953"
                },
                "published": "2011-08-01T19:58:00.000Z",
                "updated": "2011-08-01T19:58:51.947Z",
                "url": "http://buzz.blogger.com/2011/08/latest-updates-august-1st.html",
                "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553",
                "title": "Latest updates, August 1st",
                "content": "elided for readability",
                "author": {
                    "id": "401465483996",
                    "displayName": "Brett Wiltshire",
                    "url": "http://www.blogger.com/profile/01430672582309320414",
                    "image": {
                        "url": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
                    }
                },
                "replies": {
                    "totalItems": "0",
                    "selfLink": "https://www.googleapis.com/blogger/v3/blogs/2399953/posts/7706273476706534553/comments"
                }
            },
            {
                "kind": "blogger#post",
                "id": "6069922188027612413",
            }
        ]
    }

    return (
        exampleBlogsJSON.items.map((blogItem) => {
            return (
                <section key={blogItem.id} className="text-gray-400 bg-gray-900 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={blogItem.author?.image.url} alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{blogItem.author?.displayName}</h2>
                                        <h1 className="title-font text-lg font-medium text-white mb-3">{blogItem.title}</h1>
                                        <p className="leading-relaxed mb-3">{blogItem.content}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <a className="text-teal-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                <img src={rightArrowBright} alt="" />
                                            </a>
                                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">12 Jun 2019</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    )
}

export default Blogs