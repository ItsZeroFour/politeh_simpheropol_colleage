import "@/app/scss/index.scss";
import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";
import { Poppins } from "next/font/google";
import StoreProvider from "./store/StoreProvider";
import Script from 'next/script'
import Head from "next/head";

// TODO: fix this shit when we have something like this in the browser

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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <body className={poppins.main}>
        <StoreProvider>
          <div className="page">
            <div className="container">
              <Header />
              <main>{children}</main>
            </div>
            
            <Footer />
          </div>
        </StoreProvider>

        {/* <Script src='https://lidrekon.ru/slep/js/jquery.js'/>
        <Script src='https://lidrekon.ru/slep/js/uhpv-full.min.js'/> */}
      </body>
    </html>
  );
};

export default RootLayout;
