import Header from "../components/Header";
import SliderLayout from "../components/SliderLayout";

function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          marginTop: "160px",
        }}
      >
        <SliderLayout>
          <img
            src="https://bluegardenia.vtexassets.com/assets/vtex.file-manager-graphql/images/1aed47d0-5963-407e-b3d4-6f6fc68d8905___22e244f1ece99b44ec15e5f133b743a9.jpg"
            width={1280}
            height={530}
            alt="1"
          />

          <img
            src="https://bluegardenia.vtexassets.com/assets/vtex.file-manager-graphql/images/cd4432e7-843e-4b17-8a8a-7ef38c97cd3d___1e31a927235e5d28b3e064942daaa424.jpg"
            width={1280}
            height={530}
            alt="2"
          />

          <img
            src="https://bluegardenia.vtexassets.com/assets/vtex.file-manager-graphql/images/c4a04ef8-815e-4b7d-84d0-c0844eb16793___60aa0b030b7ed05912f0c0a7a3e566aa.jpg"
            width={1280}
            height={530}
            alt="3"
          />

          <img
            src="https://bluegardenia.vtexassets.com/assets/vtex.file-manager-graphql/images/264fe1c7-29f5-47a1-bac5-976859ba9d7c___7a07869ba3e88f18640146651a865762.jpg"
            width={1280}
            height={530}
            alt="4"
            />
        </SliderLayout>
      </div>
    </>
  );
}

export default Home;
