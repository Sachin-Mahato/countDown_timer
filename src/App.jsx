import { useEffect, useState } from "react";
import { howManyDaysLeftInYear } from "./utils/utils";

function App() {
    const [countDown, setCountDown] = useState(howManyDaysLeftInYear());

    useEffect(() => {
        const timer = setInterval(() => {
            setCountDown(howManyDaysLeftInYear());
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <section className="flex justify-center items-center h-[100vh] bg-[#191919] text-[#F15025]">
            <p className="text-3xl md:text-5xl">{countDown.daysLeft} Days, {Math.floor(countDown.hours)} Hours, {Math.floor(countDown.minutes)}Minutes and {Math.floor(countDown.seconds)} Seconds left</p>
        </section>
    );
}

export default App;
