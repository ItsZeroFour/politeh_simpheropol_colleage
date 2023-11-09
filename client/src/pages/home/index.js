import FirstScreen from "@/widgets/home/FirstScreen/FirstScreen"
import LoginForm from "@/widgets/home/LoginForm/LoginForm"
import SearchBar from "@/widgets/home/SearchBar/SearchBar"

export const Home = () => {
    return (
        <section>
            <FirstScreen />
            <SearchBar />
            <LoginForm />
        </section>
    )
}

