import { useEffect, useRef } from "react";

export default function ErrorPage() {
  const torchRef = useRef(null);

  useEffect(() => {
    const moveTorch = (e) => {
      if (torchRef.current) {
        torchRef.current.style.left = `${e.pageX}px`;
        torchRef.current.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener("mousemove", moveTorch);

    return () => {
      document.removeEventListener("mousemove", moveTorch);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        <h1 style={styles.h1}>404</h1>

        <h2 style={styles.h2}>Feature in Development</h2>

        <h3 style={styles.h3}>
          Sorry, This page is currently under development
        </h3>
      </div>

      <div ref={torchRef} style={styles.torch}>
        <div style={styles.innerTorch}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundImage:
      'url("https://wallpapercave.com/wp/6SLzBEY.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "relative",
  },

  text: {
    textAlign: "center",
    zIndex: 2,
  },

  h1: {
    color: "#011718",
    fontSize: "15em",
    margin: 0,
    lineHeight: 1,
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadow:
      "-5px 5px 0px rgba(0,0,0,0.7), -10px 10px 0px rgba(0,0,0,0.4), -15px 15px 0px rgba(0,0,0,0.2)",
  },

  h2: {
    color: "black",
    fontSize: "5em",
    marginTop: "-40px",
    marginBottom: "20px",
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadow: "-5px 5px 0px rgba(0,0,0,0.7)",
  },

  h3: {
    color: "#a9a8a7",
    fontSize: "2em",
    maxWidth: "900px",
    padding: "0 20px",
    fontFamily: "monospace",
    fontWeight: "bold",
    textShadow: "-5px 5px 0px rgba(0,0,0,0.7)",
  },

  torch: {
    position: "fixed",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "rgba(0,0,0,0.3)",

    boxShadow: "0 0 0 9999px rgba(0,0,0,0.90)",

    pointerEvents: "none",

    transform: "translate(-50%, -50%)",

    zIndex: 10,
  },

  innerTorch: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",

    boxShadow:
      "inset 0 0 40px 2px #000, 0 0 20px 4px rgba(13,13,10,0.2)",
  },
};