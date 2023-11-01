import "@/scss/index.scss";
import { Poppins } from "next/font/google";
import Header from "@/widgets/header/header";
import Footer from "@/widgets/footer/footer";

export const metadata = {
  title: "Политехнический колледж Симферополя",
  description: `Государственное бюджетное профессиональное образовательное учреждение
   Республики Крым «Симферопольский политехнический колледж», создано Советом министров
  Республики Крым на основании распоряжения от 09.12.2014 № 1326-р
  «О создании Государственных бюджетных учреждений Республики Крым»,
  приказа Министерства образования, науки и молодежи Республики Крым
  от 11.12.2014 №349 «О государственных бюджетных учреждениях Республики Крым».`,
};

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html len="ru">
      <body className={poppins.main}>
        <div className="page">
          <div className="container">
            <Header />
            <main>{children}</main>
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
