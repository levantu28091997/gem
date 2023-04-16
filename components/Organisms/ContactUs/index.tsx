import AboutTitleSection from "@/components/Atoms/AboutTitleSection"
import ItemContact from "../../Molecules/ItemContact"
import useScreenSize from "@/utils/useScreenSize"

const ContactUs = () => {
    const { isDesktop, isTablet, isMobile } = useScreenSize()
    const dataContact = [
        { title: "For getting in game", text: "Explore your developer solution" },
        { title: "Level up", text: "Join your team!" },
        { title: "Boost your brand", text: "Upload your advertisement" },
    ]
    if (isTablet) {
        return (
            <div className="w-full py-[24px]">
                <div className="text-center container mx-auto pb-[46px]">
                    <AboutTitleSection title="Contact to us!" size="40px" fontStyle="italic" />
                </div>
                <div className="flex justify-between">
                    {dataContact.map((item) => <ItemContact title={item.title} text={item.text} />)}
                </div>
            </div>
        )
    }
    if (isMobile) {
        return (
            <div className="w-full py-[24px]">
                <div className="text-center container mx-auto pb-[46px]">
                    <AboutTitleSection title="Contact to us!" size="40px" fontStyle="italic" />
                </div>
                <div className="mx-auto justify-center">
                    {dataContact.map((item) => <ItemContact title={item.title} text={item.text} />)}
                </div>
            </div>
        )
    }

    return (
        <div className="w-full py-[24px]">
            <div className="text-center container mx-auto pb-[46px]">
                <AboutTitleSection title="Contact to us!" size="40px" fontStyle="italic" />
            </div>
            <div className="flex justify-between mx-[200px]">
                {dataContact.map((item) => <ItemContact title={item.title} text={item.text} />)}
            </div>
        </div>
    )



}

export default ContactUs