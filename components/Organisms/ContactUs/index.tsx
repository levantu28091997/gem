import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import ItemContact from "../../Molecules/ItemContact"
import useScreenSize from "@/utils/useScreenSize"

const ContactUs = () => {
    const { isTablet, isMobile } = useScreenSize()
    const dataContact = [
        { title: "For getting in game", text: "Explore your developer solution" },
        { title: "Level up", text: "Join your team!" },
        { title: "Boost your brand", text: "Upload your advertisement" },
    ]
    
    return (
        <div className="w-full py-[24px]">
            <div className="text-center container mx-auto pb-[46px] text-white">
                <AboutTitleSection title="Contact to us!" size="40px" fontStyle="italic" />
            </div>
            <div className={isMobile? 'grid grid-cols-1 gap-5 mx-auto': isTablet? 'grid grid-cols-3 gap-1 mx-auto':'grid grid-cols-3 gap-3 w-[70%] mx-auto'}>
                {dataContact.map((item) => <ItemContact title={item.title} text={item.text} />)}
            </div>
        </div>
    )



}

export default ContactUs