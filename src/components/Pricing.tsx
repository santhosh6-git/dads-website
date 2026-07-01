const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-4">
            ★ SINCE 1975
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-blue-900">
            Our Pricing
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Affordable pricing with trusted quality garment care since 1975.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Ironing */}

          <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              👔 Ironing
            </h3>

            {[
              ["Pant", "₹15"],
              ["Shirt", "₹15"],
              ["Cotton Pant", "₹20"],
              ["Cotton Shirt", "₹20"],
              ["Chudidhar", "₹15"],
              ["Cotton Saree", "₹60"],
              ["Silk Saree", "₹80"],
              ["Blouse", "₹15"],
            ].map(([item, price]) => (

              <div
                key={item}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <span>{item}</span>

                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {price}
                </span>

              </div>

            ))}

          </div>

          {/* Dry Cleaning */}

          <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              ✨ Dry Cleaning
            </h3>

            {[
              ["Pant", "₹80"],
              ["Shirt", "₹80"],
              ["Dhoti", "₹80"],
              ["Cotton Saree", "₹250"],
              ["Silk Saree", "₹300"],
              ["Blouse", "₹80"],
            ].map(([item, price]) => (

              <div
                key={item}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <span>{item}</span>

                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {price}
                </span>

              </div>

            ))}

          </div>

          {/* Saree Rolling */}

          <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-blue-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8">

            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              🥻 Saree Rolling
            </h3>

            {[
              ["Cotton Saree", "₹80"],
              ["Silk Saree", "₹100"],
            ].map(([item, price]) => (

              <div
                key={item}
                className="flex justify-between items-center py-3 border-b border-gray-200"
              >
                <span>{item}</span>

                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {price}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Note */}

        <div className="mt-16 flex justify-center">

          <div className="bg-white rounded-full shadow-lg px-8 py-4 border border-blue-100 text-center">

            <span className="font-semibold text-blue-900">
              ⭐ Quality Service
            </span>

            <span className="mx-3 text-gray-400">  •</span>

            <span className="mx-3 text-gray-400"></span>

            <span className="font-semibold text-blue-900">
              👕 Best Care For Your Clothes
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Pricing;