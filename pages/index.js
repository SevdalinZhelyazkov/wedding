import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import main from "./main.jpg";
import timeline from "./timeline.jpg";

export default function Home() {
  const handleClick = () => {
    window.open("https://forms.gle/xMdaEaDKyBB81U7e8");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Сватбата на Кристина и Севдалин</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mainImage">
          <Image src={main} fill alt="KS" placeholder="blur" />
        </div>

        <button type="button" className="submit" onClick={handleClick}>
          Потвърди Присъствие
        </button>

        <div className="timelineImage">
          <Image src={timeline} fill alt="timeline" placeholder="blur" />
        </div>
      </main>

      <style jsx>{`
        .submit {
          background-color: #431f09;
          border-radius: 8px;
          color: #fff;
          font-weight: bold;
          padding: 15px 25px;
          border: none;
          outline: 0;
          cursor: pointer;
        }
        .submit:hover {
          background-color: #5c3117;
        }
        .mainImage {
          position: relative;
          width: 100vw;
          height: 176vw;
          max-width: 500px;
          max-height: 881px;
        }
        .timelineImage {
          position: relative;
          width: 100vw;
          height: 200vw;
          max-width: 500px;
          max-height: 1000px;
        }
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 500px;
          width: 100%;
          position: relative;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
