import FirstScreen from "@/widgets/home/FirstScreen/FirstScreen"
import LoginForm from "@/widgets/home/LoginForm/LoginForm"
import Posts from "@/widgets/home/Posts/Posts"
import SearchBar from "@/widgets/home/SearchBar/SearchBar"


export const Home = () => {
    return (
        <section>
            <FirstScreen />
            <SearchBar />
            <div className='flex justify-between mt-[54px]'>
                <LoginForm />
                <Posts />
            </div>
        </section>
    )
}

