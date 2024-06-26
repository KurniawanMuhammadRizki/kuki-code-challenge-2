import React from "react";
import Image from "next/image";

// const CardTransparent: React.FC = () => {
//   return (
//     <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
//       <div className="card lg:card-side flex ">
//         <div className="card-body p-1 flex flex-col font-Helvetica-Neue  text-black">
//           <div>
//             <p className="mb-2">About Kukilabs</p>
//             <h2 className="max-w-[580px] font-bold text-4xl text-left">
//               Motor of business innovation
//             </h2>
//           </div>
//           <div className="max-w-[580px] text-wrap  text-left">
//             <p>
//               The rapid digitalization in Indonesia over the past several years
//               is a large catalyst for making Kukilabs possible. Our belief is
//               that technological innovations could bring value beyond
//               businesses.
//             </p>
//             <br />
//             <p>
//               Kukilabs serves as a pragmatic platform designed for
//               entrepreneurs, leaders, and growth-focused individuals navigating
//               the intricacies of digital transformation. Our commitment is to
//               facilitate the construction of robust businesses and companies
//               while fostering a meaningful life. Explore Kukilabs as your
//               trusted ally in the journey of digital evolution and business
//               development.
//             </p>
//           </div>
//         </div>
//         <figure className="w-full">
//           <Image
//             src={"/img-hero-about.png"}
//             alt={"img-hero-about"}
//             width={1301}
//             height={929}
//             priority={true}
//             className="w-full h-auto"
//           />
//         </figure>
//       </div>
//     </div>
//   );
// };
const CardTransparent: React.FC = () => {
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <div className="card lg:card-side flex flex-col lg:flex-row">
        <div className="card-body p-1 flex flex-col font-Helvetica-Neue text-black lg:w-1/2">
          <div>
            <p className="mb-2">About Kukilabs</p>
            <h2 className="max-w-[580px] font-bold text-4xl text-left">
              Motor of business innovation
            </h2>
          </div>
          <div className="max-w-[580px] text-wrap text-left">
            <p>
              The rapid digitalization in Indonesia over the past several years
              is a large catalyst for making Kukilabs possible. Our belief is
              that technological innovations could bring value beyond
              businesses.
            </p>
            <br />
            <p>
              Kukilabs serves as a pragmatic platform designed for
              entrepreneurs, leaders, and growth-focused individuals navigating
              the intricacies of digital transformation. Our commitment is to
              facilitate the construction of robust businesses and companies
              while fostering a meaningful life. Explore Kukilabs as your
              trusted ally in the journey of digital evolution and business
              development.
            </p>
          </div>
        </div>
        <figure className="w-full lg:w-1/2">
          <Image
            src={"/img-hero-about.webp"}
            alt={"img-hero-about"}
            width={1301}
            height={929}
            loading="lazy"
            className="w-full h-auto"
          />
        </figure>
      </div>
    </div>
  );
};

export default CardTransparent;
