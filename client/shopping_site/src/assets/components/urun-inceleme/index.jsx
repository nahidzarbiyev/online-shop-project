import React from "react";

const UrunInceleme = () => {
  return (
    <div className="max-w-[1900px] mx-auto text-center max-h-[518px] flex flex-col justify-center items-center p-12">
      <div className="max-w-[800px]  flex flex-col justify-center items-center">
        {" "}
        <p>
          Satışa Sunuldu: <span>Nike Invincible 3</span>
        </p>{" "}
        <span className="font-Anton text-dark text-7xl pt-5">
          DENEMEDEN HİSSEDEMEZSİN
        </span>
        <p className="text-[20px] leading-8 text-center pt-12 ">
          En yastıklamalı yol koşu ayakkabımız olağanüstü rahatlık, üstün
          yumuşaklık ve kilometreler boyunca hafif ve destekleyici bir deneyim
          sunuyor.
        </p>
        <div className="flex gap-2 pt-6">
            <button className="px-6 py-2 bg-dark hover:opacity-80 text-white rounded-3xl">Erkek Ürenlerini İncele</button>
            <button  className="px-6 py-2 bg-dark hover:opacity-80 text-white rounded-3xl">Kadın Ürenlerini İncele</button>
        </div>
      </div>
    </div>
  );
};

export default UrunInceleme;
