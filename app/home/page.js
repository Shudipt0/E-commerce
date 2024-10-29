import FlashSaleBanner from "../components/FlashSaleBanner";
import HeroBanner from "../components/HeroBanner";
import HeroCat from "../components/HeroCat";
import HeroSection from "../components/HeroSection";

export default function Home(){
    return(
        <div className="w-full h-fit">
            <HeroBanner/>
            <HeroCat/>
            <HeroSection/>
            <FlashSaleBanner/>
        </div>
    )
}