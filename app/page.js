import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import Layout from "@/app/components/Layout/layout";
export default function Home() {
  return (
   <div style={{
   display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', 
  }}>
   <Navbar/>
   {/* <h1 style={{ flexGrow: 1 }}>This is showing!!</h1> */}
   <div style={{ flexGrow: 8 }}>
        <Layout />
      </div>
      <div   style={{
        textAlign: "center",
        padding: "10px 0",
        marginTop: "auto",
       
        postion:"fixed"
        
      }}>
    <Footer />
    </div>
   </div>
  );
}
