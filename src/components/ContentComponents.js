import Image from "next/image";
import React from "react";
import openai from "../../public/images/openai_logo.png";
import spacex from "../../public/images/spacex.png";
export function RocketsDescription({ styles }) {
  return (
    <section className={styles.description}>
      <h2 className={styles.description_title}>
        What are rockets? How do they work?
      </h2>
      <p className={styles.description_content}>
        Rockets are vehicles that are used to propel people or objects from the
        surface of the Earth into outer space.{" "}
        <span>
          They consist of a few main parts: a rocket engine, fuel, and a
          payload.
        </span>{" "}
        The rocket engine is what produces the thrust needed to lift the rocket
        off the ground and into the air. The fuel is what powers the rocket
        engine and the payload is what the rocket is carrying, whether that be
        people, satellites, or other objects.
        <br />
        <br />
        There are many different types of rockets, but{" "}
        <span>
          the ones that take us to space are called launch vehicles.
        </span>{" "}
        These rockets are usually multi-stage, meaning they have multiple rocket
        engines and fuel tanks that can be jettisoned as the rocket uses up its
        fuel and becomes lighter.{" "}
        <span>
          The most powerful launch vehicles are used to send spacecraft beyond
          low Earth orbit and into deep space.
        </span>
        <br />
        <br />
        Want to learn more?.{" "}
        <a href="https://chat.openai.com/chat">
          Ask Chat GPT about SpaceX rockets.
        </a>
      </p>
    </section>
  );
}
export function CapsulesDescription({ styles }) {
  return (
    <section className={styles.description}>
      <h2 className={styles.description_title}>
        What are capsules? How do they work?
      </h2>
      <p className={styles.description_content}>
        Space capsules are spacecraft that are designed to{" "}
        <span>
          carry a small number of people or cargo from Earth to various
          destinations in space and back again.
        </span>{" "}
        These capsules typically have a rounded or conical shape and are
        equipped with a heat shield to protect them from the extreme
        temperatures and forces that they encounter during reentry into the
        Earth&apos;s atmosphere.
        <br />
        <br />
        Some space capsules, such as the ones used by{" "}
        <span>
          NASA&apos;s Apollo program, have a detachable module that can be used
          to land on the surface of a celestial body, such as the Moon.
        </span>{" "}
        Others, such as the{" "}
        <span>
          Russian Soyuz capsule, are designed to land on land using a parachute
          system.
        </span>{" "}
        Space capsules are typically launched into space atop a rocket and are
        either uncrewed or carry a crew of up to six astronauts. They are an
        essential component of many space exploration missions and have played a
        critical role in our understanding of the universe.
        <br />
        <br />
        Want to learn more?.{" "}
        <a href="https://chat.openai.com/chat">
          Ask Chat GPT about SpaceX capsules.
        </a>
      </p>
    </section>
  );
}
export function RocketsSearchDescription({ styles }) {
  return (
    <>
      <h2 className={styles.search_header}>Check out the Rockets by SpaceX</h2>
      <p className={styles.search_description}>
        <a href="https://www.spacex.com/">
          SpaceX is a private aerospace company
        </a>{" "}
        founded in 2002 by Elon Musk. One of SpaceX&apos;s main products is its
        line of rockets, which are used to launch payloads into space for
        customers such as NASA and commercial satellite companies.{" "}
        <span>
          The company&apos;s Falcon 9 and Falcon Heavy rockets are two of the
          most well-known launch vehicles in operation today.
        </span>{" "}
        The Falcon 9 is a two-stage rocket that has been used to launch cargo
        and crew to the International Space Station, as well as to deploy
        satellites into orbit.
        <br />
        <br />
        <span>
          The Falcon Heavy is a larger, more powerful rocket that is capable of
          carrying heavy payloads, such as spacecraft bound for the outer
          reaches of our solar system.
        </span>{" "}
        SpaceX is also developing a fully reusable rocket called the Starship,
        which the company hopes will one day be used to transport people to
        Mars.
        <br />
        <br />
        You can learn about all the rockets by SpaceX here.{" "}
        <span>Try filtering out the results based on your liking.</span>
      </p>
    </>
  );
}
export function CapsulesSearchDescription({ styles }) {
  return (
    <>
      <h2 className={styles.search_header}>Check out the Capsules by SpaceX</h2>
      <p className={styles.search_description}>
        <a href="https://www.spacex.com/">SpaceX&apos;s</a> Dragon spacecraft is
        a capsule that is used to transport people and cargo to and from the
        International Space Station (ISS).{" "}
        <span>
          The Dragon capsule is launched into space atop a Falcon 9 or Falcon
          Heavy rocket, and once it reaches the ISS, it can be docked to the
          station or used as a free-flying spacecraft.
        </span>{" "}
        There are two main versions of the Dragon capsule: the cargo version,
        which is used to carry supplies and scientific experiments to the ISS,
        and the crew version, which is designed to transport astronauts.
        <br />
        <br />
        <span>
          The crew version of the Dragon has been used to ferry NASA astronauts
        </span>{" "}
        to and from the ISS as part of the agency&apos;s Commercial Crew
        Program. The Dragon capsule is also the first spacecraft developed by a
        private company to be certified by NASA for human spaceflight.
        <br />
        <br />
        You can learn about all the rockets by SpaceX here.{" "}
        <span>Try filtering out the results based on your liking.</span>
      </p>
    </>
  );
}
export function FooterDescription({ styles }) {
  return (
    <>
      <h2 className={styles.description_title}>
        Open source project with SpaceX data
      </h2>
      <div className={styles.logos}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M99.8031 29.0215C99.7687 29.0215 99.7531 29.0059 99.7406 29.0059C99.7062 29.0059 99.675 29.0215 99.6406 29.0402C36.6031 35.3871 6.98125 62.7934 0 69.5371L0.928125 70.9996H11.9437C40.5719 42.209 79.2594 32.6527 99.7219 29.5121L99.7375 29.5277C99.75 29.5277 99.7656 29.4934 99.7844 29.4934C99.9 29.4777 99.9969 29.3809 99.9969 29.2527C99.9969 29.1371 99.9125 29.0559 99.8 29.0246L99.8031 29.0215ZM1.57812 43.784L0.9125 45.0371L14.4375 54.8996C17.1719 53.3027 19.9719 51.8246 22.8219 50.4246L13.7562 43.784H1.57812ZM31.6406 56.8652C29.3937 58.5277 27.1156 60.2871 24.6562 62.3527L36.5406 70.9934H48.8625L49.3844 69.8715L31.6406 56.8652Z"
            fill="#e67300"
          />
        </svg>
        <svg
          width="50"
          height="51"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90.5262 40.9739C92.3298 37.7236 93.2792 34.0844 93.2792 30.3524C93.2792 26.5327 92.2644 22.7557 90.3427 19.4273C84.6081 9.49723 72.2064 5.77064 62.0293 10.6102C61.1121 9.08314 60.0132 7.67251 58.7451 6.40337C54.6188 2.27393 49.1215 0 43.2688 0C31.81 0 22.3881 8.87796 21.4842 20.1461C13.8333 20.2858 6.7487 24.4415 2.92583 31.0727C-2.81704 41.0058 0.169682 53.6216 9.47331 60.0259C7.66743 63.2767 6.72024 66.9154 6.72024 70.6497C6.72024 74.4694 7.7351 78.2464 9.65677 81.5748C13.705 88.5876 21.0825 92.5164 28.6509 92.5164C31.8007 92.5164 34.9865 91.8296 37.9778 90.407C38.8936 91.9287 39.9903 93.334 41.2538 94.6003C45.3801 98.7259 50.8774 101 56.7301 101C68.1889 101 77.6108 92.122 78.5147 80.8539C86.1656 80.7142 93.2502 76.5585 97.0731 69.9273C102.817 59.9942 99.8307 47.3784 90.5271 40.9741L90.5262 40.9739ZM87.429 21.1087C89.0546 23.9267 89.914 27.1214 89.914 30.3505C89.914 33.4565 89.1335 36.4849 87.656 39.2L64.3022 25.7093C63.7824 25.4095 63.1408 25.4095 62.621 25.7093L38.1999 39.7802L38.2187 28.142L62.0994 14.3469C62.1264 14.3334 62.1535 14.3184 62.1783 14.3049C71.0004 9.22564 82.3321 12.2797 87.4282 21.1088L87.429 21.1087ZM61.8041 57.3301L49.9832 64.1407L38.1721 57.2978L38.1939 43.6659L50.0148 36.8552L61.8259 43.6982L61.8041 57.3301ZM24.7581 21.8532C24.7731 11.6602 33.0754 3.36665 43.2676 3.36665C48.2219 3.36665 52.8724 5.29046 56.3641 8.78177C57.4023 9.82032 58.3045 10.9701 59.0632 12.2123L35.6959 25.7097C35.1761 26.011 34.8546 26.5649 34.8546 27.1638L34.8095 55.3514L24.7584 49.5303L24.7581 21.8532ZM5.83755 32.7573C9.04677 27.1889 14.976 23.7028 21.3927 23.5314V50.4992C21.3927 51.0982 21.7127 51.6558 22.2325 51.9556L46.6171 66.0805L36.5375 71.8874L12.726 58.1314C12.684 58.1013 12.6404 58.0743 12.5946 58.0472C3.76575 52.9303 0.733066 41.586 5.83824 32.7569L5.83755 32.7573ZM12.5683 79.8905C10.9427 77.0725 10.0833 73.8778 10.0833 70.6487C10.0833 67.5428 10.8638 64.5143 12.3414 61.7993L35.6952 75.2899C35.9558 75.4395 36.245 75.5154 36.5365 75.5154C36.8257 75.5154 37.1172 75.4395 37.3763 75.2899L61.7974 61.219L61.7786 72.8573L37.8979 86.6523C37.8709 86.6658 37.8439 86.6808 37.8191 86.6944C28.997 91.7715 17.6672 88.7182 12.5691 79.8905L12.5683 79.8905ZM75.2393 79.1465C75.2242 89.3396 66.922 97.6331 56.7297 97.6331C51.7755 97.6331 47.1249 95.7093 43.6332 92.218C42.5951 91.1794 41.6928 90.0297 40.9342 88.7875L64.3014 75.2901C64.8212 74.9887 65.1428 74.4349 65.1428 73.8359L65.1878 45.6484L75.239 51.4694L75.2393 79.1465ZM94.1598 68.2424C90.9506 73.8109 85.0214 77.297 78.6046 77.4684V50.5005C78.6046 49.9016 78.2846 49.344 77.7648 49.0442L53.3803 34.9177L63.4598 29.1124L87.2713 42.8684C87.3134 42.8984 87.357 42.9255 87.4028 42.9525C96.2316 48.0695 99.2643 59.4137 94.1591 68.2428L94.1598 68.2424Z"
            fill="#e67300"
          />
        </svg>
      </div>

      <p className={styles.description_content}>
        All the information provided about the Rockets and Capsules is fetched
        from the{" "}
        <a href="https://docs.spacexdata.com/">
          open source data provided by SpaceX.
        </a>{" "}
        <br />
        <br />
        We appreciate the work that SpaceX is doing to revolutionize space
        travel and make it more accessible to people around the world.{" "}
        <span>
          The data we have used on our website has been sourced from the SpaceX
          API, which is provided as a free and open source service.
        </span>{" "}
        We are grateful for the opportunity to use this valuable resource and
        look forward to seeing what the future holds for SpaceX and the space
        industry as a whole.
        <br />
        <br />
        <a href="https://openai.com/">Open AI</a> is used for generating
        wonderful content for the website which is again{" "}
        <span>an open source tool for the world to use.</span>
      </p>
    </>
  );
}
