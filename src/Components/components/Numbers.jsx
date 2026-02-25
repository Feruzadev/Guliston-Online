import { Card, CardBody } from "@material-tailwind/react"
import { NavLink } from "react-router-dom";
export default function Numbers() {
    return (
        <div>
            <div className="Container">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-[30px]">
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/aa/3f/enjoy-high-japanese-cuisine.jpg?w=1200&s=1"
                                    alt="Restoranlar"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-5xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        Restoranlar
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://www.wedgewoodweddings.com/hubfs/Untitled-2_0000_Tent_NT_0010000%20copy.jpg"
                                    alt="To`yxonalar"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-5xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        To`yxonalar
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://t3.ftcdn.net/jpg/02/69/01/66/360_F_269016668_6zNEquDBT8pi176JsK8Jxkba06CCuTAr.jpg"
                                    alt="kafelar"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-5xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        Kafelar
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeyg_yfZfKC4PZ4Wjfj1QYbdrEKnR5gLQ8w&s"
                                    alt="Mehmonxonalar"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-5xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        Mehmonxonalar
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}