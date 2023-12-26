import { Typography, Button } from "@material-tailwind/react";
import app_store from '../../assets/app-stores/app-store.png';
import google_play from '../../assets/app-stores/google-play.png';
import web from '../../assets/app-stores/chrome-web.png';

const Links = () => {
  return (
    <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#00D395] place-content-start my-6 py-[4rem] ">
      <div className="my-2 p-2 mx-4 md:mx-8 ">
        {/* Centered the text and button */}
        <Typography
          placeholder={undefined}
          variant="h2"
          color="white"
          className="font-poppins font-bold"
        >
          Get your Everything <br/> Wallet now!
        </Typography>
        <div className="mt-6 text-center">
          <Button
            placeholder={undefined}
            
            size="lg"
            color="white"
            className="text-emerald"
          > 
            {" "}
            Download
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap my-2 p-2 gap-4 justify-center">
        <div style={{ order: 3 }}>
          <Button 
          placeholder={undefined}
          variant="filled"
          color="white"
          onClick={() => { /* Add your action for App Store here */ }}>
            <img src={app_store} alt="app-store" className="w-[8rem] h-auto" />
          </Button>
        </div>
        <div style={{ order: 1 }}>
          <Button
            placeholder={undefined}
            variant="filled"
            color="white"
            onClick={() => { /* Add your action for Google Play here */ }}>
            <img src={google_play} alt="google-play" className="w-[8rem] h-auto" />
          </Button>
        </div>
        <div style={{ order: 2 }}>
          <Button 
            placeholder={undefined}
            variant="filled"
            color="white"
            onClick={() => { /* Add your action for Chrome Web here */ }}>
            <img src={web} alt="chrome-web" className="w-[10rem] h-auto" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Links;
