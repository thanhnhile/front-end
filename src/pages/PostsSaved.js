import React from "react";
const posts = [
    {
        id: '1',
        title: 'iPhone 13 Pro Max 256G VN - Zin chuẩn',
        price: '23.900.000',
        href: '#',
        category: 'Dien thoai',
        branchName: 'Apple',
        year: '2020',
        warranty: 'Không',
        datePosted: '',
        images: [
            {
                src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
                alt: 'Two each of gray, white, and black shirts laying flat.',
            },
        ],
        description:
            'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
        address:
            'Phường 13, Quận 4, Tp Hồ Chí Minh',
        postedBy: {
            username: "Thanh Phong Store",
            phone: "0335489456",
            address: "Thủ Đức, Tp. HCM",
        }
    },
    {
        id: '2',
        title: 'iPhone 13 Pro Max 256G VN',
        price: '20.900.000',
        href: '#',
        category: 'Dien thoai',
        branchName: 'Apple',
        year: '2020',
        warranty: 'Không',
        datePosted: '',
        images: [
            {
                src: 'https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-xanh-xa-1.jpg',
                alt: 'Two each of gray, white, and black shirts laying flat.',
            },
        ],
        description:
            'Cam kết zin nguyên bản - Không Zin Tặng Máy - ( Bảo hành 1/2023 Chính Hãng VN ) - Zin chất đẹp 99%',
        address:
            'Phường 13, Quận 4, Tp Hồ Chí Minh',
        postedBy: {
            username: "Nam Store",
            phone: "0335489456",
            address: "Q4, Tp. HCM",
        }
    }
]
function PostsSaved() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Tin đã lưu</h1>
                <div className="grid grid-cols-1 gap-y-10">
                    {
                        posts.map((post, index) => (
                            <div className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img className="h-full w-full object-cover object-center" src={post.images[0].src} />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                            <h3>
                                                <a href="#">{post.title}</a>
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="text-red-600 text-l">{post.price}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">{post.postedBy.username} - {post.address}</p>

                                        <div className="flex">
                                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">Bỏ lưu</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default PostsSaved