import { useEffect } from 'react';
import '../App.css';


function Clock() {

  useEffect(() => {
    const hours = document.getElementsByClassName("Hour");
    const minutes = document.getElementsByClassName("Minute");
    const seconds = document.getElementsByClassName("Seconds");

    const timer = setInterval(() => {
      const now = new Date();

      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();

      h = h % 12;
      h = h === 0 ? 12 : h;

      hours[0].querySelector("h2").innerHTML = h
      minutes[0].querySelector("h2").innerHTML = m
      seconds[0].querySelector("h2").innerHTML = s

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='layout'>
        <div className='Hour'>
          <h2>Hours</h2>
        </div>

        <div className='Minute'>
          <h2>Minute</h2>
        </div>

        <div className='Seconds'>
          <h2>Seconds</h2>
        </div>
      </div>
    </>
  )
}

export default Clock;
