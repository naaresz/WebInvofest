import Button from "./Button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center">
  <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-10">

    {/* TEXT */}
    <div className="w-2/3">
      <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        Invofest (Informatics Vocational Festival) adalah festival tahunan 
        yang bertujuan <br /> untuk menginspirasi dan memberdayakan generasi muda 
        Indonesia dalam <br /> menghadapi era digital.
        Dengan mengusung tema{" "}
        <strong>
          “Beyond Limits, <br /> Beyond Intelligence: Innovate for a Smarter Tomorrow”
        </strong>.
      </p>

        <div className="flex gap-3">
              <Button title="Info Selengkapnya" variant="primary" />
              <Button title="Hubungi Panitia" variant="outline" />
        </div>
    </div>

    {/* IMAGE */}
    <div className="w-1/3 flex justify-center">
      <img
        src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
        alt="robot"
        className="w-full"
      />
    </div>

  </div>
</section>
  );
};

export default Hero;