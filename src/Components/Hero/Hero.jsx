
import { Card, CardBody } from "@material-tailwind/react"
import { NavLink } from "react-router-dom";
export default function Hero() {
    return (
        <div>
            <div className="Container">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-[30px]">
                    <NavLink to="/mahsulotlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://media.gettyimages.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ="
                                    alt="Mahsulotlar, xizmatlar"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-4xl font-semibold transition-transform duration-300 group-hover:scale-110 text-center">
                                        Mahsulotlar, xizmatlar
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/raqamlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://uploads-ssl.webflow.com/653d7bec84a3efc081f15d9a/6585a8773f618c2e1c4740ba_1-3.jpeg"
                                    alt="tashkilotlarni telefon raqamlari"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-4xl font-semibold transition-transform duration-300 group-hover:scale-110 text-center">
                                        Tashkilot telefon raqamlari
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://www.insidehook.com/wp-content/uploads/2025/07/advertising-in-space.jpg?fit=1200%2C800"
                                    alt="Reklama maydoni"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-4xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        Reklama maydoni
                                    </h2>
                                </div>
                            </CardBody>
                        </Card>
                    </NavLink>
                    <NavLink to="/Restaranlar" className="group">
                        <Card className="relative shadow-lg border border-blue-gray-50 hover:shadow-xl transition-shadow overflow-hidden rounded-xl">
                            <CardBody className="p-0 relative">

                                <img
                                    src="https://t3.ftcdn.net/jpg/02/82/67/22/360_F_282672294_g0LwMrnRpYS3jHcMqxQIYkpSOERoXzp3.jpg"
                                    alt="Ish bandligi"
                                    className="w-full h-[350px] object-cover"
                                />
                                <div className="absolute inset-0 bg-black/25"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <h2 className="text-white text-4xl font-semibold transition-transform duration-300 group-hover:scale-110">
                                        Ish bandligi
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