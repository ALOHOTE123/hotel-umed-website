import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6">

          <h1 className="text-white text-3xl font-bold">
            HOTEL UMED
          </h1>

          <div className="hidden md:flex gap-8 text-white font-medium">

            <a href="#about">About</a>

            <a href="#gallery">Gallery</a>

            <a href="#contact">Contact</a>

          </div>

        </nav>

        <div className="relative z-10 h-full flex items-center justify-center">

          <div className="text-center px-6 max-w-5xl">

            <p className="uppercase tracking-[8px] text-green-300">
              WELCOME TO
            </p>

            <h1 className="text-6xl md:text-8xl font-extrabold text-white mt-6">
              Hotel Umed
            </h1>

            <h2 className="text-3xl md:text-5xl text-yellow-300 mt-4">
              Resto Bar
            </h2>

            <p className="mt-10 text-lg md:text-2xl text-gray-100 leading-9">

              Discover a peaceful destination surrounded by lush greenery,
              open-air seating and delicious food.

              Spend memorable moments with your family and friends while
              enjoying nature.

            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <a
                href="https://wa.me/919284542620"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-white font-semibold"
              >
                WhatsApp
              </a>

              <a
                href="tel:9284542620"
                className="bg-white text-green-800 px-8 py-4 rounded-full font-semibold"
              >
                Call Now
              </a>

              <a
                href="https://www.instagram.com/umed_resto_bar?igsh=cW1qdWhuaHhkODE5"
                target="_blank"
                className="bg-pink-600 hover:bg-pink-700 px-8 py-4 rounded-full text-white font-semibold"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-24 bg-[#f6fbf6]"
      >

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <Image
            src="/gallery1.jpg"
            alt="Hotel Umed"
            width={700}
            height={500}
            className="rounded-3xl shadow-2xl"
          />

          <div>

            <span className="uppercase tracking-[6px] text-green-700 font-semibold">
              About Hotel
            </span>

            <h2 className="text-5xl font-bold mt-5 text-green-900">
              Escape Into Nature
            </h2>

            <p className="mt-8 text-gray-700 leading-9 text-lg">

              Nestled amidst lush greenery in Rumbhodi,
              Hotel Umed Resto Bar offers a unique outdoor
              dining experience with delicious food,
              refreshing beverages and peaceful surroundings.

              Whether you are visiting with friends or family,
              every visit becomes a memorable experience.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🌿 Nature
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🍽 Delicious Food
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🍺 Premium Drinks
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-5">
                🌄 Outdoor Seating
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl text-center font-bold text-green-800">
            Why Choose Hotel Umed?
          </h2>

          <p className="text-center text-gray-600 mt-5">
            Peaceful surroundings, delicious food and unforgettable memories.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🌿</div>

              <h3 className="text-2xl font-bold mt-5">
                Green Environment
              </h3>

              <p className="mt-4 text-gray-600">
                Relax in a peaceful natural atmosphere.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🍽</div>

              <h3 className="text-2xl font-bold mt-5">
                Tasty Food
              </h3>

              <p className="mt-4 text-gray-600">
                Freshly prepared meals and beverages.
              </p>

            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8">

              <div className="text-5xl">🌄</div>

              <h3 className="text-2xl font-bold mt-5">
                Outdoor Seating
              </h3>

              <p className="mt-4 text-gray-600">
                Enjoy evenings under the open sky.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PART 2 STARTS HERE */}
            {/* GALLERY SECTION */}

      <section
        id="gallery"
        className="py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-green-900">
            Our Gallery
          </h2>

          <p className="text-center text-gray-600 mt-5 text-lg">
            Beautiful moments, delicious food and peaceful surroundings.
          </p>


          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <Image
              src="/gallery1.jpg"
              alt="Hotel View"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl h-80 object-cover"
            />

            <Image
              src="/gallery2.jpg"
              alt="Food"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl h-80 object-cover"
            />

            <Image
              src="/gallery3.jpg"
              alt="Outdoor Seating"
              width={600}
              height={400}
              className="rounded-3xl shadow-xl h-80 object-cover"
            />

          </div>

        </div>

      </section>
{/* MENU SECTION */}

<section className="py-24 bg-white">

  <div className="max-w-5xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Our Menu
    </h2>

    <p className="text-center text-gray-600 mt-5 text-lg">
      Authentic food and beverages prepared for a memorable dining experience.
    </p>


    <div className="grid md:grid-cols-2 gap-10 mt-14">


      <div className="bg-green-50 rounded-3xl shadow-xl p-10">

        <h3 className="text-3xl font-bold text-green-900">
          🍽 Food
        </h3>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg">

          <li>• Maharashtrian Specialities</li>
          <li>• Chinese Cuisine</li>
          <li>• Starters</li>
          <li>• Main Course</li>
          <li>• Family Combos</li>

        </ul>

      </div>



      <div className="bg-green-50 rounded-3xl shadow-xl p-10">

        <h3 className="text-3xl font-bold text-green-900">
          🍺 Beverages
        </h3>

        <ul className="mt-6 space-y-4 text-gray-700 text-lg">

          <li>• Beer</li>
          <li>• Whisky</li>
          <li>• Wine</li>
          <li>• Premium Drinks</li>
          <li>• Special Beverages</li>

        </ul>

      </div>


    </div>


    <div className="text-center mt-12">

      <a
        href="https://wa.me/919284542620?text=Hello%20Hotel%20Umed,%20I%20want%20to%20know%20the%20menu."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-700 text-white px-10 py-4 rounded-full font-bold"
      >
        Ask For Menu On WhatsApp
      </a>

    </div>


  </div>

</section>

{/* REVIEWS SECTION */}

<section className="py-24 bg-green-50">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Customer Reviews
    </h2>

    <p className="text-center text-gray-600 mt-5 text-lg">
      What our guests say about Hotel Umed Resto Bar.
    </p>


    <div className="grid md:grid-cols-3 gap-8 mt-14">


      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Beautiful location surrounded by nature.
          Great food and peaceful atmosphere.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>



      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Excellent place for family and friends.
          Food quality is really good.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>



      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="text-yellow-500 text-3xl">
          ⭐⭐⭐⭐⭐
        </div>

        <p className="mt-5 text-gray-700">
          Nice ambience, outdoor seating and
          enjoyable evening experience.
        </p>

        <h3 className="mt-5 font-bold text-green-900">
          - Happy Customer
        </h3>

      </div>


    </div>

  </div>

</section>
      {/* FACILITIES SECTION */}

      <section className="py-24 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center text-green-900">
            Our Facilities
          </h2>

          <p className="text-center text-gray-600 mt-5 text-lg">
            Everything you need for a comfortable dining experience.
          </p>


          <div className="grid md:grid-cols-4 gap-8 mt-14">


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🚗</div>
              <h3 className="text-xl font-bold mt-5">
                Parking
              </h3>
              <p className="text-gray-600 mt-3">
                Spacious parking area for guests.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold mt-5">
                Family Seating
              </h3>
              <p className="text-gray-600 mt-3">
                Comfortable seating for families and groups.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🍺</div>
              <h3 className="text-xl font-bold mt-5">
                Resto Bar
              </h3>
              <p className="text-gray-600 mt-3">
                Enjoy food and beverages with friends.
              </p>
            </div>


            <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
              <div className="text-5xl">🌙</div>
              <h3 className="text-xl font-bold mt-5">
                Evening Ambience
              </h3>
              <p className="text-gray-600 mt-3">
                Relaxing atmosphere surrounded by nature.
              </p>
            </div>


          </div>

        </div>

      </section>

      {/* LOCATION SECTION */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center text-green-900">
      Visit Us
    </h2>

    <p className="text-center mt-6 text-xl text-gray-700">
      Hotel Umed Resto Bar
      <br />
      Rumbhodi, Maharashtra
    </p>


    <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">


      <div className="rounded-3xl overflow-hidden shadow-xl">

        <iframe
          src="https://www.google.com/maps?q=Hotel+Umed+Resto+Bar+Rumbhodi+Maharashtra&output=embed"
          width="100%"
          height="400"
          loading="lazy"
          className="border-0"
        ></iframe>

      </div>


      <div className="text-center md:text-left">

        <h3 className="text-3xl font-bold text-green-900">
          Find Our Location
        </h3>

        <p className="mt-5 text-gray-600 text-lg">
          Visit Hotel Umed Resto Bar and enjoy delicious food,
          refreshing beverages and a peaceful natural atmosphere.
        </p>


       <a
  href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Umed+Resto+Bar+Rumbhodi+Maharashtra"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 bg-green-700 text-white px-10 py-4 rounded-full font-semibold"
>
  Get Directions
</a>

      </div>


    </div>

  </div>

</section>


      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="py-24 bg-green-900 text-white"
      >

        <div className="max-w-5xl mx-auto px-6 text-center">


          <h2 className="text-5xl font-bold">
            Reserve Your Table
          </h2>


          <p className="mt-6 text-xl">
            Call us or WhatsApp for booking and enquiries.
          </p>


          <div className="flex justify-center gap-5 mt-10 flex-wrap">


            <a
              href="https://wa.me/919284542620"
              target="_blank"
              className="bg-green-500 px-10 py-4 rounded-full font-bold"
            >
              WhatsApp Booking
            </a>


            <a
              href="tel:9284542620"
              className="bg-white text-green-900 px-10 py-4 rounded-full font-bold"
            >
              Call Now
            </a>


          </div>


        </div>

      </section>



      {/* FOOTER */}

      <footer className="bg-black text-white py-8 text-center">

        <h3 className="text-2xl font-bold">
          Hotel Umed Resto Bar
        </h3>

        <p className="mt-3 text-gray-400">
          © 2026 Hotel Umed. All Rights Reserved.
        </p>

      </footer>
      {/* FLOATING WHATSAPP BUTTON */}

      <a
        href="https://wa.me/919284542620"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-2xl font-bold flex items-center gap-2"
      >
        💬 WhatsApp
      </a>


    </main>
  );
}