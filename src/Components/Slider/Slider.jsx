import { useEffect, useRef, useState } from "react";

export default function Slider() {
    const slides = [
        { id: 1, title: "Slide 1", desc: "Bu birinchi slayd", img: "https://picsum.photos/800/400?1" },
        { id: 2, title: "Slide 2", desc: "Bu ikkinchi slayd", img: "https://picsum.photos/800/400?2" },
        { id: 3, title: "Slide 3", desc: "Bu uchinchi slayd", img: "https://picsum.photos/800/400?3" },
    ];

    const [current, setCurrent] = useState(0);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Swipe handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;

        if (distance > 50) nextSlide(); // swipe left
        if (distance < -50) prevSlide(); // swipe right
    };

    return (
        <div className="">
            <div className="Container w-full max-w-5xl mx-auto">
                <div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <img
                        src={slides[current].img}
                        alt={slides[current].title}
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
                        <h2 className="text-xl font-semibold">{slides[current].title}</h2>
                        <p className="text-sm opacity-90">{slides[current].desc}</p>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-xl"
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white px-3 py-1 rounded-xl"
                    >
                        ›
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-3">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-black" : "w-2 bg-gray-400"}`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
