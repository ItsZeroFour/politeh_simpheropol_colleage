import FirstScreen from "@/widgets/home/FirstScreen/FirstScreen"
import LoginForm from "@/widgets/home/LoginForm/LoginForm"
import Posts from "@/widgets/home/Posts/Posts"
import SearchBar from "@/widgets/home/SearchBar/SearchBar"
import Background from "@entities/home/Background/Background"
import ContactForm from "@widgets/home/ContactForm/ContactForm"
import Departments from "@widgets/home/Departments/Departments"
import EssentialLinks from "@widgets/home/EssentialLinks/EssentialLinks"
import Ministries from "@widgets/home/Ministries/Ministries"


export const Home = () => {
    return (
        <section>
            <Background />
            <FirstScreen />
            <SearchBar />
            <div className='flex justify-between mt-[54px]'>
                <LoginForm />
                <Posts />
            </div>
            <ContactForm />
            <EssentialLinks />
            <Departments />
            <Ministries />
        </section>
    )
}

