import React from "react";

const WhatIsKuki: React.FC = () => {
  const list = [
    "Kuki-Talenta - HR, Workforce, and Payroll solution",
    "Kuki-Jurnal - Finance, Accounting, and Inventory solution",
    "Kuki-Klikpajak - Tax reporting and management solution",
    "Kuki-Flex - Employee benefit and welfare support solution",
    "Kuki-e-Sign - e-Signature, e-Stamps, and authorization solution",
  ];
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[76px] bg-base-color">
      <div className="flex font-Helvetica-Neue text-black flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col w-full md:max-w-[440px] mr-4">
          <h2 className="text-4xl mb-4 font-bold">What is Kukilabs?</h2>
          <p className="text-lg pb-3 mb-3">
            Kukilabs is a leading Software-as-a-Service (SaaS) company that
            provides cloud-based business automation solutions to support the
            diverse business landscape in Indonesia, catering to businesses of
            all sizes, through the use of technology.
          </p>
        </div>
        <div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked
                aria-label="featured"
              />
              <div className="collapse-title text-xl font-medium max-w-[800px]">
                <h2>What are Kuki&apos;s products?</h2>
              </div>
              <div className="collapse-content">
                <div>
                  <p>
                    Kukilabs offers fully-featured and integrated products,
                    including:
                  </p>
                  <div>
                    <ul className="flex flex-col mb-4">
                      {list?.map((item, index) => (
                        <li key={index} className="flex mb-2">
                          <div className="flex items-start">
                            <img
                              src={"/ic-check-alt.svg"}
                              alt="check"
                              className="mr-2"
                            />
                            <p>{item}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked
                aria-label="purchase"
              />
              <div className="collapse-title text-xl font-medium max-w-[800px]">
                <h2>How can I purchase or subscribe to Kukilabs products?</h2>
              </div>
              <div className="collapse-content">
                <div>
                  <p>
                    To purchase Kukilabs products, you can contact our sales
                    team via WhatsApp or visit our contact us page. Our team is
                    ready to serve and answer your questions to the best of
                    their ability.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked
                aria-label="price"
              />
              <div className="collapse-title text-xl font-medium max-w-[800px]">
                <h2>What is the price of Kukilabs products?</h2>
              </div>
              <div className="collapse-content">
                <div>
                  <p>
                    The prices of Kukilabs products can be viewed on the pricing
                    page. You can customize them according to your
                    company&apos;s conditions and budget. You can choose to
                    subscribe to just one product or purchase product bundles
                    for more cost-effectiveness.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked
                aria-label="SaaS"
              />
              <div className="collapse-title text-xl font-medium max-w-[800px]">
                <h2>What is SaaS?</h2>
              </div>
              <div className="collapse-content">
                <div>
                  <p>
                    SaaS, or Software as a Service, is a way to use software
                    over the internet without installing it on your computer.
                    Instead of buying and owning the software, you subscribe to
                    it and access it online. Common examples include CRM, HR
                    software, Accounting software, and other Kukilabs Product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsKuki;
