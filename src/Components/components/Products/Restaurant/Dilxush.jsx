import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Dilxush() {
    return (
        <div>
            <div className="Container">
                <div>
                    <img
                        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/aa/3f/enjoy-high-japanese-cuisine.jpg?w=1200&s=1"
                        alt="Restoranlar"
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-[900px_400px] mt-[30px] mb-[40px]">

                    <Card className="bg-[#fcf9f9]">
                        <CardBody className="flex flex-col gap-4 ">
                            <Typography variant="h4">Restoran haqida</Typography>
                            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quas eaque molestiae autem architecto impedit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequatur magnam laboriosam placeat recusandae praesentium tenetur animi blanditiis impedit cumque?</p>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad unde debitis sapiente libero impedit eligendi fugiat reprehenderit a alias, neque rerum quaerat culpa incidunt quisquam!</p>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <Typography variant="h4">Kontanktlar</Typography>
                            <div className="flex flex-col gap-6 mt-3">
                                <div>
                                    <span className="opacity-65 text-[14px]">Telefon 1</span>
                                    <Button className="flex items-center justify-center gap-[10px] w-full" color="blue">
                                        <FaPhoneAlt />
                                        Qo`ng`iroq qilish
                                    </Button>
                                </div>

                                <div>
                                    <span className="opacity-65 text-[14px]">Telefon 1</span>
                                    <Button className="flex items-center justify-center gap-[10px] w-full" color="blue">
                                        <FaPhoneAlt />
                                        Qo`ng`iroq qilish
                                    </Button>
                                </div>

                            </div>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    )
}