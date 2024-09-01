import { color } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { white } from "tailwindcss/colors";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
function Circularscroll() {

  const test  = useRef(null);

  useEffect(()=> {
    const element = test.current;
    gsap.to(element,
      {
        rotate: "1440deg",
        duration: 100
    }
    
    );
   
  }, []);
  
  
  return (
    <div ref={test} className="-right-[100px] -bottom-[100px] fixed z-[99]">
      <p>
        <div
          style={{
            position: "relative",
            height: "18.8679em",
            width: "18.8679em",
            color: "white",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-176.743deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-170.228deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-163.713deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(-155.765deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            D
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.387212em) rotate(-148.094deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            I
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-140.636deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            S
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(-131.468deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            C
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.636976em) rotate(-121.875deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            O
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-112.494deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            V
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-103.538deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            E
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(-94.3703deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            R
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-86.4225deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-79.9076deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-73.3928deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-65.6575deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            E
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-56.7019deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            X
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-47.7464deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            P
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.526211em) rotate(-39.2183deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            L
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.636976em) rotate(-30.2651deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            O
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(-20.6719deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            R
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(-11.5037deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            E
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(-3.76849deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(2.7464deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(9.26128deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(17.2091deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            C
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.636976em) rotate(26.8023deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            O
          </span>
          <span
            div
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(36.3955deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            N
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(45.7762deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            N
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(54.9443deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            E
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(64.1124deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            C
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.553515em) rotate(73.0632deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            T
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(80.5811deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(87.096deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.423203em) rotate(93.6109deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            .
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.553512em) rotate(101.129deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            T
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(110.08deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            R
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(119.248deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            A
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(128.416deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            N
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.581749em) rotate(137.584deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            S
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.553515em) rotate(146.322deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            F
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.636976em) rotate(155.486deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            O
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.609363em) rotate(165.079deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            R
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "auto",
              left: "50%",
              transform: "translateX(-0.66459em) rotate(174.885deg)",
              transformOrigin: "center 9.43395em",
            }}
          >
            M
          </span>
        </div>
      </p>
    </div>
  );
}

export default Circularscroll;
