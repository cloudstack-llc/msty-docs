export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "Msty Docs",
      description:
        "Get started with guides and resources to maximize your conversational AI experience with Msty.",
    },
    theme: {
      customizable: false,
      color: "blue",
      radius: 0.5,
    },
    header: {
      title: "Msty Docs",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/icon.svg",
        dark: "/icon.svg",
      },
      nav: [],
      // links: [
      //   {
      //     icon: "tabler:brand-github",
      //     to: "https://github.com/cloudstack-llc/msty-docs",
      //     target: "_blank",
      //   },
      // ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "CloudStack, LLC",
      links: [
        // {
        //   icon: "tabler:brand-github",
        //   to: "https://github.com/cloudstack-llc/msty-docs",
        //   target: "_blank",
        // },
        {
          icon: "ph:cube",
          to: "https://msty.app?ref=docs",
          target: "_blank",
        },
      ],
    },
    toc: {
      enable: false,
      title: "On This Page",
      links: [
        {
          title: "Go to Msty App",
          to: "https://msty.app?ref=docs",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
