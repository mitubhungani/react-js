import { useState } from "react";
import { Inputbox } from "./components";
import usecurrencyinfo from "./hooks/usecurrencyinfo.js";

function App() {
  const [amount, setamount] = useState(null);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState();

  const currencyinfo = usecurrencyinfo(from);

  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };

  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEA8NDQ8SDQ0NEhYNDQ0NEBUNDQ0NFRUWFhURFRUYHSggGBolHRUVITEhJSk3Li4uFx8zODMtNygtLisBCgoKDQ0NFQ0NFy0dFR0tLSsrKysrLTcrKysrLSsrKysrKystKysrKysrKysrKysrKysrLSsrKystKysrLSsrK//AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAHxABAAMBAAMAAwEAAAAAAAAAABEx8AEhQeFRwdFh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A4iqazWrChrNYAazWCoazWCiaz57BeBzeU1iNIaz57AXrPf77Xu8gKms/v5Beid3k5+/yArPN5UAOfz2c3kAT57PvsVUXWmsFQ1msANZrADWawElU1gSz3rSdFUAFBNYihrNYKmo1msFE1msF50k5vKawWSTWc3kQlWe7yvd5Akk1msDvVTu8nN5/wCSTm8nd5Ak501nN5AkTWaxVTUutNYKmo1n32AGs/n5ADWmsFQSRVZ6sp0GgAUNaaxFDWawA1msFE1nz2C8Q5vJOkFDWTpEBJ/ftZACdJOkAO90k6QBOd0rIHw4k/r2usUEnSawVDWawVDWawA1msANaAqGtBVZ6qdFVUURUNZrEUNZrADWawA1msF4JzeTWCiazWCia11gCazWCia11iAms1iqJrNYKJrNYKhrNYAazWAGtNYKioAioKJ1U6iqAqKIA0ICKAAAAACiACoAogAqKCKgCiAAAKgAAAIqAqCCqggKyqIqqgoqygIqoawUTWaxFDWmsF4Gs1gBrNYCprNYCprNYCprNYAazWAGs1gBrNYAazWAGtO7yCoApKAAgCiKiCgAogo0ICKACicBFAAAAVAAABUAAABFAEAVF6gKnRBVQAEVBQEQVAAVAFABRBRVQEUQBoQBRARRPqgCdUAQBRAFEAVAFVBAVAAQEUBAVFQAAAAFEAUEBVQBRFVFklAFklAFkkAJJACSQAkkAJJQBZSQABAVARQEBUAAAAAAAAABUAUQBQAFQBRBRRAFEUAQBRAFEAVAQAQFEAVAAAAAAAAAAAAAAABRAFAAAAAAAAAAAAAAEAVAAAAAAAAAAAB//2Q==')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setamount(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setamount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedamount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setto(currency)}
                selectCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()}to{to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
