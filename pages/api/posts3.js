// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    networkPackages: [
      {
        smallTitle: "STANDARD",
        price: "$49.99",
        mo: "/mo",
        isMostPopular: true,
        text: [
          { text: "Free Google Voice Remote and DVR included" },
          { text: "60+ HD Channels" },
          { text: "Local Channels" },
          { text: "190 Channel" },
        ],
        buttonText: "Get started",
        info: "or call1(900) 232 123",
      },
      {
        smallTitle: "SILVER",
        price: "$74.99",
        mo: "/mo",
        isMostPopular: false,
        text: [
          { text: "Free Google Voice Remote and DVR included" },
          { text: "110+ HD Channels" },
          { text: "Local Channels" },
          { text: "190+ Channel" },
        ],
        buttonText: "Get started",
        info: "or call1(900) 232 123",
      },
      {
        smallTitle: "GOLD",
        price: "$84.99",
        mo: "/mo",
        isMostPopular: false,
        text: [
          { text: "Free Google Voice Remote and DVR included" },
          { text: "125+ HD Channels" },
          { text: "Local Channels" },
          { text: "240+ Channel" },
        ],
        buttonText: "Get started",
        info: "or call1(900) 232 123",
      },
      {
        smallTitle: "DIAMON",
        price: "$94.99",
        mo: "/mo",
        isMostPopular: false,
        text: [
          { text: "Free Google Voice Remote and DVR included" },
          { text: "140+ HD Channels" },
          { text: "Local Channels" },
          { text: "290+ Channel" },
        ],
        buttonText: "Get started",
        info: "or call1(900) 232 123",
      },
    ],

    ourservice: [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/08/23/22/20/sea-6568951__340.jpg",
        title: "Network & Connectivity",
        description:
          "Solutions to optimize performance and deliver the bandwidth and reliablility needed to support IT transformation.",
        learnMore: "Learn more",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/14/14/46/cologne-6624212__340.jpg",
        title: "UC & Voice",
        description:
          "Unified communications and colaboration solutions to engage customers, empower your people and deliver a different CX",
        learnMore: "Learn more",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2020/06/29/14/15/lightbulb-5352822__340.jpg",
        title: "Security & Compliance",
        description:
          "Fully managed enterprise security solutions to protect your data, sutomers and business reputation from costly digital threats and attacks.",
        learnMore: "Learn more",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/23/05/30/strawberry-6648685__340.jpg",
        title: "Professional Services",
        description:
          "Experts to argument your staff, freeing your team to focus on strategic innovation and growth.",
        learnMore: "Learn more",
      },
    ],

    internetPlans: [
      {
        smalltitle: "Personal",
        title: "Good Value",
        price: "$39.99",
        month: "/month",
        buttonText: "Order now",
        titleColor: "text-white",
        priceColor: "text-white",
        planBackgroundColor: "bg-blue-900",
        buttonBackgroundColor: "bg-white",
        buttonTextColor: "text-black",
        listItems: [
          { text: "250 Mbps" },
          { text: "400Gb included data" },
          {
            text: "premium productivity features and simple, secure file sharing",
          },
        ],
      },
      {
        smalltitle: "Small family",
        title: "Most Popular",
        price: "$49.99",
        month: "/month",
        buttonText: "Purchase now",
        titleColor: "text-blue-900",
        priceColor: "text-blue-900",
        planBackgroundColor: "bg-white",
        buttonBackgroundColor: "bg-gray-200",
        buttonTextColor: "text-blue-900",
        listItems: [
          { text: "500 Mbps" },
          { text: "500Gb included data" },
          {
            text: "premium productivity features and simple, secure file sharing",
          },
        ],
      },
      {
        smalltitle: "Business",
        title: "Top Speed",
        price: "$59.99",
        month: "/month",
        buttonText: "Purchase now",
        titleColor: "text-blue-900",
        priceColor: "text-blue-900",
        planBackgroundColor: "bg-white",
        buttonBackgroundColor: "bg-blue-900",
        buttonTextColor: "text-white",
        listItems: [
          { text: "940 Mbps" },
          { text: "Unlimited included data" },
          {
            text: "premium productivity features and simple, secure file sharing",
          },
        ],
      },
    ],
  };
  res.status(200).json(object);
}
