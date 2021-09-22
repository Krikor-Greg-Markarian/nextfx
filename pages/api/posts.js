// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const object = {
    jobOpening: [
      {
        title: "we're hiring",
        subtitle: "Cuurent job Openings",
        subsubtitle:
          "our team is continually looking to recruit exceptional talent in all businesses areas and markets where we offer services. We're always lookign for peolpe to join our team.",
      },
      {
        role: "Role",
        location: "Location",
        type: "Type",
      },
      {
        position: "Network Engineer",
        city: "New York",
        time: "Full time",
        button: "Apply now",
      },
      {
        position: "Technical Support",
        city: "New York",
        time: "Full time",
        button: "Apply now",
      },
      {
        position: "Corporate Sales Executive",
        city: "New York",
        time: "Full time",
        button: "Apply now",
      },
    ],
    support: {
      text: "We're here to support you.",
      info: "We've streamlined our plans to give the fastest internet available at your address for one low monthly price.",
      supportbutton: "our support center",
    },
    enployeebenefits: {
      title: "join our team",
      subtitle: "Benefits for Employee",
      subsubtitle:
        "We've streamlined our plans to give the fastest internet available at your address for one low monthly price.",
      healthtitle: "HEALTH INSURANCE",
      medicalsub:
        "comprehensive Medical, Dental, and vision for Employees + Dependents.",
      comptitle: "COMPETITIVE SALARY",
      wesubtitle:
        "We offer highly competitive salaries based on skill set and experience.",
      worktitle: "WORK-LIFE BALANCE",
      paidsubtitle: "paid Time Off, 10 Company Holidays and Paid Sick Leave.",
    },
    backgroundimg: {
      title: "Stay connected with the right NetFx internet service",
      subtitle: "Get a price you'll love and the reliability you deserve.",
      startbutton: "Let's get started",
    },
  };
  res.status(200).json(object);
}
