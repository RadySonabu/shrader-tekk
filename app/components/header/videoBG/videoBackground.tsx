import React from "react";
import styles from "./VideoBackground.module.css"; // Importing the styles

const VideoBackground = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source
          src="/videos/background/headerbackground.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
