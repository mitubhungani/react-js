import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(6);
  const [numallow, setnumallow] = useState(false);
  const [carallow, setcarallow] = useState(false);
  const [pass, setpass] = useState("");

  //ref hook
  const passref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let password = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numallow) str += "0123456789";
    if (carallow) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setpass(password);
  }, [length, numallow, carallow, setpass]);

  const copypass =useCallback(()=>{
    passref.current?.select();
    // passref.current?.setSelectionRange(0,3);
    window.navigator.clipboard.writeText(pass)
  },[pass])

  useEffect(() => {
    passwordgenerator();
  }, [length, numallow, carallow, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <div className="flex shadow rounded-lg overflow-hidden mb-5">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passref}
          />

          <button 
          onClick={copypass}
          className="outnline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 w-full justify-around">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer outline-none"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />

            <label>Length:{length}</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              defaultChecked={numallow}
              id="numinput"
              onClick={() => {
                setnumallow((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              defaultChecked={carallow}
              id="charinput"
              onClick={() => {
                setcarallow((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
