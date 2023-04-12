import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="flex min-h-screen items-center justify-center bg-[#111111f9] pt-[50px] text-white">
        <div className="flex min-w-[600px] flex-col justify-between gap-8 p-8">
          {/* Tabs */}

          <div className="flex gap-4">
            {/* <button className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300">
              Zmień dane ciała
            </button>

            <button
              className="bg-white py-2 px-6 uppercase text-black disabled:bg-gray-300"
              disabled
            >
              Przejdź dalej
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
