// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    experienceThe: [
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/06/01/13/coffee-6600644__340.jpg:",
        title: "Wifi internet",
        description: "High-Speed internet access that is always on & fast.",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781__340.jpg",
        title: "Wifi internet",
        description: "High-Speed internet access that is always on & fast.",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/14/18/25/tenor-saxophone-6624725__340.jpg",
        title: "Wifi internet",
        description: "High-Speed internet access that is always on & fast.",
      },
      {
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/09/14/14/46/cologne-6624212__340.jpg",
        title: "Wifi internet",
        description: "High-Speed internet access that is always on & fast.",
      },
    ],

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

    blogClassic: [
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
      {
        date: "May 11,2020 / By",
        name: "Emma Waston",
        title: "Wearables and More: 5 Tech Trends for Pet Parents",
        description:
          "Given the rate in which technology evolves and, and given thta the next wave of infrastructure revolution is upon us with 5G, it's useful to know the direction that enterprise internet will be heading, particularly thta these trends[...]",
        tag: "Read More",
      },
    ],
  };
  res.status(200).json(object);
}
