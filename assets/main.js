/* md-portfolio.dev — shared behaviour
   Handles the language toggle (English / te reo Māori / हिन्दी / বাংলা),
   the dark mode toggle, and the local, no-API-key portfolio chatbot.
   Runs on both index.html and projects.html. */
(function () {
  "use strict";

  var translations = {
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      enquire: "Get in touch",
      title: "Simple ideas. Useful websites.",
      intro: "I'm MD Ilful Hossain, an IT student and web developer from \"EASTERN INSTITUTE OF TECHNOLOGY\" who enjoys making clear, accessible digital experiences.",
      viewProjects: "View my projects",
      codeStatus: "built with plain HTML, CSS and JavaScript",
      aboutLabel: "About",
      aboutTitle: "A practical developer with a creative eye.",
      aboutText: "I build responsive websites and small applications with a focus on readable content, thoughtful structure, and a good experience for every user.",
      capabilities: "What I can help with",
      capabilityIntro: "A clear process and a useful outcome.",
      point1: "Responsive websites built with HTML, CSS, JavaScript and React.",
      point2: "Interfaces that follow WCAG accessibility guidelines.",
      point3: "Simple layouts with clear, keyboard-friendly navigation.",
      point4: "Small tools that solve everyday problems, like a trivia quiz or a browser game.",
      point5: "Clear, plain-language communication from start to finish.",
      projectsPageTitle: "My projects",
      projectsPageIntro: "All of my public projects, built and shared on GitHub.",
      github: "View GitHub profile",
      viewProject: "View on GitHub",
      viewDemo: "Live demo",
      talk: "Have a project in mind?",
      talkText: "Send me a message and let\u2019s talk about what you want to make.",
      send: "Send a message",
      footerTagline: "Designed and developed by MD Ilful Hossain",
      footerAboutHeading: "About",
      footerLinksHeading: "Quick links",
      footerContactHeading: "Contact",
      footerLocation: "Aotearoa New Zealand",
      footerCopyright: "\u00A9 2026 MD Ilful Hossain.",
      skipLink: "Skip to main content",
      chatTitle: "Ask me anything",
      chatAvailable: "About my portfolio",
      chatWelcome: "This is my portfolio website. Ask me anything about my work, projects, or skills.",
      chatPlaceholder: "Type a question\u2026",
      chatHint: "Try: What projects have you built?",
      chatOpen: "Chat",
      chatClose: "Close",
      themeToggle: "Toggle dark mode",
      botSkills: "I work with HTML, CSS, JavaScript, React, TypeScript and Python. I enjoy building simple, responsive interfaces.",
      botProjects: "My GitHub projects include ARKADE Space Blaster, a React and TypeScript game, Terminal Trivia Quiz, a Python command-line game, and an Agile e-commerce website project. You can see all of them on the Projects page.",
      botAccessibility: "I follow the POUR approach: content should be perceivable, operable, understandable and robust. I use alt text, headings, keyboard support, contrast and clear language.",
      botContact: "You can contact me at ilful360@gmail.com or through my GitHub profile.",
      botFallback: "I can answer questions about my skills, projects, accessibility, or contact details."
    },
    mi: {
      home: "K\u0101inga",
      projects: "Ng\u0101 kaupapa",
      about: "M\u014Dku",
      contact: "Whakap\u0101",
      enquire: "Whakap\u0101 mai",
      title: "Ng\u0101 whakaaro m\u0101m\u0101. Ng\u0101 paetukutuku whai take.",
      intro: "Ko MD Ilful Hossain ahau, he \u0101konga IT, he kaiwhakawhanake paetukutuku i Aotearoa e hiahia ana ki te hanga wheako matihiko m\u0101rama, w\u0101tea hoki.",
      viewProjects: "Tirohia aku kaupapa",
      codeStatus: "hangaia ki te HTML, CSS me JavaScript m\u0101ori",
      aboutLabel: "M\u014Dku",
      aboutTitle: "He kaiwhakawhanake whai whakaaro, he kanohi auaha.",
      aboutText: "Ka hanga au i ng\u0101 paetukutuku urupare me ng\u0101 taup\u0101nga iti, me te aro ki te tuhinga m\u0101rama, te hanganga pai, me te wheako pai m\u014D ng\u0101 kaiwhakamahi katoa.",
      capabilities: "He aha taku \u0101whina",
      capabilityIntro: "He tukanga m\u0101rama, he putanga whai take.",
      point1: "He paetukutuku urupare, hangaia ki te HTML, CSS, JavaScript me React.",
      point2: "He atanga e whai ana i ng\u0101 aratohu w\u0101tea WCAG.",
      point3: "He whakatakotoranga m\u0101m\u0101 me te whakatere m\u0101rama, tautoko papap\u0101tuhi hoki.",
      point4: "He taputapu iti hei whakaoti i ng\u0101 raruraru o ia r\u0101 \u2014 he p\u0101tai paetukutuku, he k\u0113mu paetukutuku r\u0101nei.",
      point5: "He k\u014Drero m\u0101rama i te w\u0101 katoa o te mahi.",
      projectsPageTitle: "Aku kaupapa",
      projectsPageIntro: "Aku kaupapa katoa \u2014 ng\u0101 whakam\u0101tau me ng\u0101 hanga mai i taku GitHub t\u016Bmatanui.",
      github: "Tirohia taku GitHub",
      viewProject: "Tirohia i GitHub",
      viewDemo: "Tirohanga ora",
      talk: "He kaupapa t\u0101u?",
      talkText: "Tukua mai he karere, ka k\u014Drero t\u0101tou m\u014D t\u0101u e hiahia ana ki te hanga.",
      send: "Tukua he karere",
      footerTagline: "N\u0101 MD Ilful Hossain i hoahoa, i whakawhanake",
      footerAboutHeading: "M\u014Dku",
      footerLinksHeading: "Ng\u0101 hono tere",
      footerContactHeading: "Whakap\u0101",
      footerLocation: "Aotearoa",
      footerCopyright: "\u00A9 2026 MD Ilful Hossain.",
      skipLink: "Peke ki te ihirangi matua",
      chatTitle: "P\u0101tai m\u014D taku k\u014Dtaha",
      chatAvailable: "W\u0101tea in\u0101ianei",
      chatWelcome: "Kia ora! P\u0101tai mai m\u014D \u014Dku p\u016Bkenga, kaupapa, w\u0101tea r\u0101nei.",
      chatPlaceholder: "Tuhia he p\u0101tai\u2026",
      chatHint: "Whakam\u0101tauria: He aha ng\u0101 kaupapa kua hangaia e koe?",
      chatOpen: "K\u014Drero",
      chatClose: "Katia",
      themeToggle: "Whakawhiti ki te ahua p\u014Duri",
      botSkills: "Ka mahi au ki HTML, CSS, JavaScript, React, TypeScript me Python. He pai ki ahau te hanga atanga m\u0101m\u0101, urupare hoki.",
      botProjects: "Ko aku kaupapa GitHub ko ARKADE Space Blaster, he k\u0113mu React me TypeScript, me Terminal Trivia Quiz, he k\u0113mu r\u0101rangi whakahau Python. Ka kite koe i te katoa i te wh\u0101rangi Ng\u0101 kaupapa.",
      botAccessibility: "Ka whai au i te huarahi POUR: me kitea, me whakahaere, me m\u0101rama, me pakari ng\u0101 k\u014Drero. Ka whakamahi au i te alt text, ng\u0101 pane, te tautoko papap\u0101tuhi, te rerek\u0113 o ng\u0101 tae me te reo m\u0101rama.",
      botContact: "Ka taea e koe te whakap\u0101 mai ki ilful360@gmail.com, ki taku k\u014Dtaha GitHub r\u0101nei.",
      botFallback: "Ka taea e au te whakautu m\u014D \u014Dku p\u016Bkenga, kaupapa, w\u0101tea me ng\u0101 taipitopito whakap\u0101."
    },
    hi: {
      home: "\u0939\u094B\u092E",
      projects: "\u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938",
      about: "\u092E\u0947\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      contact: "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
      enquire: "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
      title: "\u0938\u0930\u0932 \u0935\u093F\u091A\u093E\u0930. \u0909\u092A\u092F\u094B\u0917\u0940 \u0935\u0947\u092C\u0938\u093E\u0907\u091F\u0947\u0902.",
      intro: "\u092E\u0948\u0902 \u090F\u092E\u0921\u0940 \u0907\u0932\u092B\u0941\u0932 \u0939\u0941\u0938\u0948\u0928 \u0939\u0942\u0902, \u0928\u094D\u092F\u0942\u091C\u0940\u0932\u0948\u0902\u0921 \u092E\u0947\u0902 \u090F\u0915 IT \u091B\u093E\u0924\u094D\u0930 \u0914\u0930 \u0935\u0947\u092C \u0921\u0947\u0935\u0932\u092A\u0930, \u091C\u094B \u0938\u094D\u092A\u0937\u094D\u091F \u0914\u0930 \u0938\u0941\u0932\u092D \u0921\u093F\u091C\u093F\u091F\u0932 \u0905\u0928\u0941\u092D\u0935 \u092C\u0928\u093E\u0928\u093E \u092A\u0938\u0902\u0926 \u0915\u0930\u0924\u093E \u0939\u0942\u0902.",
      viewProjects: "\u092E\u0947\u0930\u0947 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u0926\u0947\u0916\u0947\u0902",
      codeStatus: "\u0938\u093E\u0926\u0947 HTML, CSS \u0914\u0930 JavaScript \u0938\u0947 \u092C\u0928\u093E",
      aboutLabel: "\u092E\u0947\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      aboutTitle: "\u090F\u0915 \u0935\u094D\u092F\u093E\u0935\u0939\u093E\u0930\u093F\u0915 \u0921\u0947\u0935\u0932\u092A\u0930, \u0930\u091A\u0928\u093E\u0924\u094D\u092E\u0915 \u0928\u095B\u0930 \u0915\u0947 \u0938\u093E\u0925.",
      aboutText: "\u092E\u0948\u0902 \u092A\u0920\u0928\u0940\u092F \u0938\u093E\u092E\u0917\u094D\u0930\u0940, \u0938\u094B\u091A\u0940-\u0938\u092E\u091D\u0940 \u0938\u0902\u0930\u091A\u0928\u093E \u0914\u0930 \u0939\u0930 \u0909\u092A\u092F\u094B\u0917\u0915\u0930\u094D\u0924\u093E \u0915\u0947 \u0932\u093F\u090F \u090F\u0915 \u0905\u091A\u094D\u091B\u0947 \u0905\u0928\u0941\u092D\u0935 \u092A\u0930 \u0927\u094D\u092F\u093E\u0928 \u0915\u0947\u0902\u0926\u094D\u0930\u093F\u0924 \u0915\u0930\u0924\u0947 \u0939\u0941\u090F \u0930\u093F\u0938\u094D\u092A\u0949\u0928\u094D\u0938\u093F\u0935 \u0935\u0947\u092C\u0938\u093E\u0907\u091F\u0947\u0902 \u0914\u0930 \u091B\u094B\u091F\u0947 \u090F\u092A\u094D\u0932\u093F\u0915\u0947\u0936\u0928 \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0902.",
      capabilities: "\u092E\u0948\u0902 \u0915\u093F\u0938\u092E\u0947\u0902 \u092E\u0926\u0926 \u0915\u0930 \u0938\u0915\u0924\u093E \u0939\u0942\u0902",
      capabilityIntro: "\u090F\u0915 \u0938\u094D\u092A\u0937\u094D\u091F \u092A\u094D\u0930\u0915\u094D\u0930\u093F\u092F\u093E \u0914\u0930 \u090F\u0915 \u0909\u092A\u092F\u094B\u0917\u0940 \u092A\u0930\u093F\u0923\u093E\u092E.",
      point1: "HTML, CSS, JavaScript \u0914\u0930 React \u0938\u0947 \u092C\u0928\u0940 \u0930\u093F\u0938\u094D\u092A\u0949\u0928\u094D\u0938\u093F\u0935 \u0935\u0947\u092C\u0938\u093E\u0907\u091F\u0947\u0902.",
      point2: "WCAG \u0938\u0941\u0932\u092D\u0924\u093E \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936\u094B\u0902 \u0915\u093E \u092A\u093E\u0932\u0928 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u0947 \u0907\u0902\u091F\u0930\u092B\u0947\u0938.",
      point3: "\u0938\u094D\u092A\u0937\u094D\u091F, \u0915\u0940\u092C\u094B\u0930\u094D\u0921-\u0905\u0928\u0941\u0915\u0942\u0932 \u0928\u0947\u0935\u093F\u0917\u0947\u0936\u0928 \u0935\u093E\u0932\u0947 \u0938\u0930\u0932 \u0932\u0947\u0906\u0909\u091F.",
      point4: "\u0930\u094B\u091C\u093C\u092E\u0930\u094D\u0930\u093E \u0915\u0940 \u0938\u092E\u0938\u094D\u092F\u093E\u0913\u0902 \u0915\u094B \u0939\u0932 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u0947 \u091B\u094B\u091F\u0947 \u091F\u0942\u0932, \u091C\u0948\u0938\u0947 \u091F\u094D\u0930\u093F\u0935\u093F\u092F\u093E \u0915\u094D\u0935\u093F\u095B \u092F\u093E \u092C\u094D\u0930\u093E\u0909\u095B\u0930 \u0917\u0947\u092E.",
      point5: "\u0936\u0941\u0930\u0942 \u0938\u0947 \u0905\u0902\u0924 \u0924\u0915 \u0938\u094D\u092A\u0937\u094D\u091F, \u0938\u0930\u0932 \u092D\u093E\u0937\u093E \u092E\u0947\u0902 \u0938\u0902\u0935\u093E\u0926.",
      projectsPageTitle: "\u092E\u0947\u0930\u0947 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938",
      projectsPageIntro: "\u092E\u0947\u0930\u0947 \u0938\u092D\u0940 \u0938\u093E\u0930\u094D\u0935\u091C\u0928\u093F\u0915 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938, GitHub \u092A\u0930 \u092C\u0928\u093E\u090F \u0914\u0930 \u0938\u093E\u091D\u093E \u0915\u093F\u090F \u0917\u090F.",
      github: "GitHub \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0926\u0947\u0916\u0947\u0902",
      viewProject: "GitHub \u092A\u0930 \u0926\u0947\u0916\u0947\u0902",
      viewDemo: "\u0932\u093E\u0907\u0935 \u0921\u0947\u092E\u094B",
      talk: "\u0915\u094B\u0908 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u0938\u094B\u091A \u0930\u0939\u0947 \u0939\u0948\u0902?",
      talkText: "\u092E\u0941\u091D\u0947 \u0938\u0902\u0926\u0947\u0936 \u092D\u0947\u091C\u0947\u0902 \u0914\u0930 \u092C\u093E\u0924 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0906\u092A \u0915\u094D\u092F\u093E \u092C\u0928\u093E\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902.",
      send: "\u0938\u0902\u0926\u0947\u0936 \u092D\u0947\u091C\u0947\u0902",
      footerTagline: "\u090F\u092E\u0921\u0940 \u0907\u0932\u092B\u0941\u0932 \u0939\u0941\u0938\u0948\u0928 \u0926\u094D\u0935\u093E\u0930\u093E \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0914\u0930 \u0935\u093F\u0915\u0938\u093F\u0924",
      footerAboutHeading: "\u092E\u0947\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      footerLinksHeading: "\u0924\u094D\u0935\u0930\u093F\u0924 \u0932\u093F\u0902\u0915",
      footerContactHeading: "\u0938\u0902\u092A\u0930\u094D\u0915",
      footerLocation: "\u0906\u0913\u091F\u0940\u092F\u093E\u0930\u094B\u0906 \u0928\u094D\u092F\u0942\u091C\u0940\u0932\u0948\u0902\u0921",
      footerCopyright: "\u00A9 2026 \u090F\u092E\u0921\u0940 \u0907\u0932\u092B\u0941\u0932 \u0939\u0941\u0938\u0948\u0928.",
      skipLink: "\u092E\u0941\u0916\u094D\u092F \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u092A\u0930 \u091C\u093E\u090F\u0902",
      chatTitle: "\u092E\u0947\u0930\u0947 \u092A\u094B\u0930\u094D\u091F\u092B\u094B\u0932\u093F\u092F\u094B \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u092A\u0942\u091B\u0947\u0902",
      chatAvailable: "\u0905\u092D\u0940 \u0909\u092A\u0932\u092C\u094D\u0927",
      chatWelcome: "\u0928\u092E\u0938\u094D\u0924\u0947! \u092E\u0947\u0930\u0947 \u0915\u094C\u0936\u0932, \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938 \u092F\u093E \u0938\u0941\u0932\u092D\u0924\u093E \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u092A\u0942\u091B\u0947\u0902.",
      chatPlaceholder: "\u090F\u0915 \u0938\u0935\u093E\u0932 \u091F\u093E\u0907\u092A \u0915\u0930\u0947\u0902\u2026",
      chatHint: "\u0906\u095B\u092E\u093E\u090F\u0902: \u0906\u092A\u0928\u0947 \u0915\u094C\u0928 \u0938\u0947 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F \u092C\u0928\u093E\u090F \u0939\u0948\u0902?",
      chatOpen: "\u091A\u0948\u091F",
      chatClose: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      themeToggle: "\u0921\u093E\u0930\u094D\u0915 \u092E\u094B\u0921 \u091F\u0949\u0917\u0932 \u0915\u0930\u0947\u0902",
      botSkills: "\u092E\u0948\u0902 HTML, CSS, JavaScript, React, TypeScript \u0914\u0930 Python \u0915\u0947 \u0938\u093E\u0925 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0942\u0902. \u092E\u0941\u091D\u0947 \u0938\u0930\u0932, \u0930\u093F\u0938\u094D\u092A\u0949\u0928\u094D\u0938\u093F\u0935 \u0907\u0902\u091F\u0930\u092B\u0947\u0938 \u092C\u0928\u093E\u0928\u093E \u092A\u0938\u0902\u0926 \u0939\u0948.",
      botProjects: "\u092E\u0947\u0930\u0947 GitHub \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938 \u092E\u0947\u0902 ARKADE Space Blaster (React \u0914\u0930 TypeScript \u0917\u0947\u092E) \u0914\u0930 Terminal Trivia Quiz (Python \u0915\u092E\u093E\u0902\u0921-\u0932\u093E\u0907\u0928 \u0917\u0947\u092E) \u0936\u093E\u092E\u093F\u0932 \u0939\u0948\u0902. \u0906\u092A \u0907\u0928\u094D\u0939\u0947\u0902 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938 \u092A\u0947\u091C \u092A\u0930 \u0926\u0947\u0916 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902.",
      botAccessibility: "\u092E\u0948\u0902 POUR \u0926\u0943\u0937\u094D\u091F\u093F\u0915\u094B\u0923 \u0915\u093E \u092A\u093E\u0932\u0928 \u0915\u0930\u0924\u093E \u0939\u0942\u0902: \u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u092C\u094B\u0927\u0917\u092E\u094D\u092F, \u0938\u0902\u091A\u093E\u0932\u0928\u0940\u092F, \u0938\u092E\u091D\u0928\u0947 \u092F\u094B\u0917\u094D\u092F \u0914\u0930 \u092E\u091C\u092C\u0942\u0924 \u0939\u094B\u0928\u0940 \u091A\u093E\u0939\u093F\u090F. \u092E\u0948\u0902 alt text, \u0939\u0947\u0921\u093F\u0902\u0917, \u0915\u0940\u092C\u094B\u0930\u094D\u0921 \u0938\u092A\u094B\u0930\u094D\u091F, \u0915\u0902\u091F\u094D\u0930\u093E\u0938\u094D\u091F \u0914\u0930 \u0938\u094D\u092A\u0937\u094D\u091F \u092D\u093E\u0937\u093E \u0915\u093E \u0909\u092A\u092F\u094B\u0917 \u0915\u0930\u0924\u093E \u0939\u0942\u0902.",
      botContact: "\u0906\u092A \u092E\u0941\u091D\u0938\u0947 ilful360@gmail.com \u092A\u0930 \u092F\u093E \u092E\u0947\u0930\u0940 GitHub \u092A\u094D\u0930\u094B\u092B\u093C\u093E\u0907\u0932 \u0915\u0947 \u091C\u093C\u0930\u093F\u090F \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930 \u0938\u0915\u0924\u0947 \u0939\u0948\u0902.",
      botFallback: "\u092E\u0948\u0902 \u0905\u092A\u0928\u0947 \u0915\u094C\u0936\u0932, \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938, \u0938\u0941\u0932\u092D\u0924\u093E \u092F\u093E \u0938\u0902\u092A\u0930\u094D\u0915 \u0935\u093F\u0935\u0930\u0923 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0938\u0935\u093E\u0932\u094B\u0902 \u0915\u093E \u091C\u0935\u093E\u092C \u0926\u0947 \u0938\u0915\u0924\u093E \u0939\u0942\u0902."
    },
    bn: {
      home: "\u09B9\u09CB\u09AE",
      projects: "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F",
      about: "\u0986\u09AE\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
      contact: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997",
      enquire: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09C1\u09A8",
      title: "\u09B8\u09B9\u099C \u09A7\u09BE\u09B0\u09A3\u09BE. \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0 \u0993\u09AF\u09BC\u09C7\u09AC\u09B8\u09BE\u0987\u099F.",
      intro: "\u0986\u09AE\u09BF \u098F\u09AE\u09A1\u09BF \u0987\u09B2\u09AB\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8, \u09A8\u09BF\u0989\u099C\u09BF\u09B2\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1\u09C7 \u098F\u0995\u099C\u09A8 \u0986\u0987\u099F\u09BF \u099B\u09BE\u09A4\u09CD\u09B0 \u098F\u09AC\u0982 \u0993\u09AF\u09BC\u09C7\u09AC \u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09BE\u09B0, \u09AF\u09BF\u09A8\u09BF \u09B8\u09CD\u09AA\u09B7\u09CD\u099F \u0993 \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09AF\u09CB\u0997\u09CD\u09AF \u09A1\u09BF\u099C\u09BF\u099F\u09BE\u09B2 \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A4\u09BE \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u09AD\u09BE\u09B2\u09CB\u09AC\u09BE\u09B8\u09C7\u09A8.",
      viewProjects: "\u0986\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u0997\u09C1\u09B2\u09CB \u09A6\u09C7\u0996\u09C1\u09A8",
      codeStatus: "\u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 HTML, CSS \u098F\u09AC\u0982 JavaScript \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A4\u09C8\u09B0\u09BF",
      aboutLabel: "\u0986\u09AE\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
      aboutTitle: "\u098F\u0995\u099C\u09A8 \u09AC\u09BE\u09B8\u09CD\u09A4\u09AC\u09AE\u09C1\u0996\u09C0 \u09A1\u09C7\u09AD\u09C7\u09B2\u09AA\u09BE\u09B0, \u09B8\u09943\u099C\u09A8\u09B6\u09C0\u09B2 \u09A6\u09C3\u09B7\u09CD\u099F\u09BF\u09AD\u0999\u09CD\u0997\u09BF \u09A8\u09BF\u09AF\u09BC\u09C7.",
      aboutText: "\u0986\u09AE\u09BF \u09B8\u09B9\u099C\u09AA\u09BE\u09A0\u09CD\u09AF \u0995\u09A8\u099F\u09C7\u09A8\u09CD\u099F, \u099A\u09BF\u09A8\u09CD\u09A4\u09BE\u09B6\u09C0\u09B2 \u0995\u09BE\u09A0\u09BE\u09AE\u09CB \u098F\u09AC\u0982 \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0\u0995\u09BE\u09B0\u09C0\u09B0 \u099C\u09A8\u09CD\u09AF \u098F\u0995\u099F\u09BF \u09AD\u09BE\u09B2\u09CB \u0985\u09AD\u09BF\u099C\u09CD\u099E\u09A4\u09BE\u09B0 \u0989\u09AA\u09B0 \u0997\u09C1\u09B0\u09C1\u09A4\u09CD\u09AC \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09B8\u09BF\u09AD \u0993\u09AF\u09BC\u09C7\u09AC\u09B8\u09BE\u0987\u099F \u0993 \u099B\u09CB\u099F \u0985\u09CD\u09AF\u09BE\u09AA\u09CD\u09B2\u09BF\u0995\u09C7\u09B6\u09A8 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09BF.",
      capabilities: "\u0986\u09AE\u09BF \u0995\u09CB\u09A8 \u09AC\u09BF\u09B7\u09AF\u09BC\u09C7 \u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF",
      capabilityIntro: "\u098F\u0995\u099F\u09BF \u09B8\u09CD\u09AA\u09B7\u09CD\u099F \u09AA\u09CD\u09B0\u0995\u09CD\u09B0\u09BF\u09AF\u09BC\u09BE \u098F\u09AC\u0982 \u098F\u0995\u099F\u09BF \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09B0 \u09AB\u09B2\u09BE\u09AB\u09B2.",
      point1: "HTML, CSS, JavaScript \u098F\u09AC\u0982 React \u09A6\u09BF\u09AF\u09BC\u09C7 \u09A4\u09C8\u09B0\u09BF \u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09B8\u09BF\u09AD \u0993\u09AF\u09BC\u09C7\u09AC\u09B8\u09BE\u0987\u099F.",
      point2: "WCAG \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09A8\u09BF\u09B0\u09CD\u09A6\u09C7\u09B6\u09BF\u0995\u09BE \u09AE\u09C7\u09A8\u09C7 \u099A\u09B2\u09BE \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09AB\u09C7\u09B8.",
      point3: "\u09B8\u09CD\u09AA\u09B7\u09CD\u099F, \u0995\u09C0\u09AC\u09CB\u09B0\u09CD\u09A1-\u09AC\u09BE\u09A8\u09CD\u09A7\u09AC \u09A8\u09C7\u09AD\u09BF\u0997\u09C7\u09B6\u09A8\u09B8\u09B9 \u09B8\u09B9\u099C \u09B2\u09C7\u0986\u0989\u099F.",
      point4: "\u099F\u09CD\u09B0\u09BF\u09AD\u09BF\u09AF\u09BC\u09BE \u0995\u09C1\u0987\u099C \u09AC\u09BE \u09AC\u09CD\u09B0\u09BE\u0989\u099C\u09BE\u09B0 \u0997\u09C7\u09AE\u09C7\u09B0 \u09AE\u09A4\u09CB \u09AA\u09CD\u09B0\u09A4\u09BF\u09A6\u09BF\u09A8\u09C7\u09B0 \u09B8\u09AE\u09B8\u09CD\u09AF\u09BE\u09B0 \u09B8\u09AE\u09BE\u09A7\u09BE\u09A8\u0995\u09BE\u09B0\u09C0 \u099B\u09CB\u099F \u099F\u09C1\u09B2.",
      point5: "\u09B6\u09C1\u09B0\u09C1 \u09A5\u09C7\u0995\u09C7 \u09B6\u09C7\u09B7 \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09B8\u09CD\u09AA\u09B7\u09CD\u099F, \u09B8\u09B9\u099C \u09AD\u09BE\u09B7\u09BE\u09AF\u09BC \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997.",
      projectsPageTitle: "\u0986\u09AE\u09BE\u09B0 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F",
      projectsPageIntro: "\u0986\u09AE\u09BE\u09B0 \u09B8\u09AC \u09AA\u09BE\u09AC\u09B2\u09BF\u0995 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F, GitHub-\u098F \u09A4\u09C8\u09B0\u09BF \u0993 \u09B6\u09C7\u09AF\u09BC\u09BE\u09B0 \u0995\u09B0\u09BE.",
      github: "GitHub \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2 \u09A6\u09C7\u0996\u09C1\u09A8",
      viewProject: "GitHub-\u098F \u09A6\u09C7\u0996\u09C1\u09A8",
      viewDemo: "\u09B2\u09BE\u0987\u09AD \u09A1\u09C7\u09AE\u09CB",
      talk: "\u0995\u09CB\u09A8\u09CB \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09C7\u09B0 \u09AA\u09B0\u09BF\u0995\u09B2\u09CD\u09AA\u09A8\u09BE \u0986\u099B\u09C7?",
      talkText: "\u0986\u09AE\u09BE\u0995\u09C7 \u098F\u0995\u099F\u09BF \u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09BE\u09A0\u09BE\u09A8, \u099A\u09B2\u09C1\u09A8 \u0995\u09A5\u09BE \u09AC\u09B2\u09BF \u0986\u09AA\u09A8\u09BF \u0995\u09C0 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u099A\u09BE\u09A8.",
      send: "\u09AC\u09BE\u09B0\u09CD\u09A4\u09BE \u09AA\u09BE\u09A0\u09BE\u09A8",
      footerTagline: "\u098F\u09AE\u09A1\u09BF \u0987\u09B2\u09AB\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8 \u09A6\u09CD\u09AC\u09BE\u09B0\u09BE \u09A1\u09BF\u095B\u09BE\u0987\u09A8 \u0993 \u09A4\u09C8\u09B0\u09BF",
      footerAboutHeading: "\u0986\u09AE\u09BE\u09B0 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7",
      footerLinksHeading: "\u09A6\u09CD\u09B0\u09C1\u09A4 \u09B2\u09BF\u0982\u0995",
      footerContactHeading: "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997",
      footerLocation: "\u0986\u0993\u09A4\u09C7\u09AF\u09BC\u09BE\u09B0\u09CB\u09AF\u09BC\u09BE \u09A8\u09BF\u0989\u099C\u09BF\u09B2\u09CD\u09AF\u09BE\u09A8\u09CD\u09A1",
      footerCopyright: "\u00A9 \u09E8\u09E6\u09E8\u09EC \u098F\u09AE\u09A1\u09BF \u0987\u09B2\u09AB\u09C1\u09B2 \u09B9\u09CB\u09B8\u09C7\u09A8.",
      skipLink: "\u09AE\u09C2\u09B2 \u0995\u09A8\u099F\u09C7\u09A8\u09CD\u099F\u09C7 \u09AF\u09BE\u09A8",
      chatTitle: "\u0986\u09AE\u09BE\u09B0 \u09AA\u09CB\u09B0\u09CD\u099F\u09AB\u09CB\u09B2\u09BF\u0993 \u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7 \u099C\u09BF\u099C\u09CD\u099E\u09BE\u09B8\u09BE \u0995\u09B0\u09C1\u09A8",
      chatAvailable: "\u098F\u0996\u09A8 \u0989\u09AA\u09B2\u09AC\u09CD\u09A7",
      chatWelcome: "\u09B9\u09BE\u0987! \u0986\u09AE\u09BE\u09B0 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE, \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F \u09AC\u09BE \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09A8\u09BF\u09AF\u09BC\u09C7 \u099C\u09BF\u099C\u09CD\u099E\u09BE\u09B8\u09BE \u0995\u09B0\u09C1\u09A8.",
      chatPlaceholder: "\u098F\u0995\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8 \u09B2\u09BF\u0996\u09C1\u09A8\u2026",
      chatHint: "\u099A\u09C7\u09B7\u09CD\u099F\u09BE \u0995\u09B0\u09C1\u09A8: \u0986\u09AA\u09A8\u09BF \u0995\u09CB\u09A8 \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u0997\u09C1\u09B2\u09CB \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09C7\u099B\u09C7\u09A8?",
      chatOpen: "\u099A\u09CD\u09AF\u09BE\u099F",
      chatClose: "\u09AC\u09A8\u09CD\u09A7 \u0995\u09B0\u09C1\u09A8",
      themeToggle: "\u09A1\u09BE\u09B0\u09CD\u0995 \u09AE\u09CB\u09A1 \u099F\u0997\u09B2 \u0995\u09B0\u09C1\u09A8",
      botSkills: "\u0986\u09AE\u09BF HTML, CSS, JavaScript, React, TypeScript \u098F\u09AC\u0982 Python \u09A8\u09BF\u09AF\u09BC\u09C7 \u0995\u09BE\u099C \u0995\u09B0\u09BF. \u09B8\u09B9\u099C, \u09B0\u09C7\u09B8\u09AA\u09A8\u09CD\u09B8\u09BF\u09AD \u0987\u09A8\u09CD\u099F\u09BE\u09B0\u09AB\u09C7\u09B8 \u09A4\u09C8\u09B0\u09BF \u0995\u09B0\u09A4\u09C7 \u0986\u09AE\u09BE\u09B0 \u09AD\u09BE\u09B2\u09CB \u09B2\u09BE\u0997\u09C7.",
      botProjects: "\u0986\u09AE\u09BE\u09B0 GitHub \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F\u09C7\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u0986\u099B\u09C7 ARKADE Space Blaster (React \u0993 TypeScript \u0997\u09C7\u09AE) \u098F\u09AC\u0982 Terminal Trivia Quiz (Python \u0995\u09AE\u09BE\u09A8\u09CD\u09A1-\u09B2\u09BE\u0987\u09A8 \u0997\u09C7\u09AE). \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F \u09AA\u09C7\u099C\u09C7 \u09B8\u09AC\u0997\u09C1\u09B2\u09CB \u09A6\u09C7\u0996\u09A4\u09C7 \u09AA\u09BE\u09B0\u09AC\u09C7\u09A8.",
      botAccessibility: "\u0986\u09AE\u09BF POUR \u09AA\u09A6\u09CD\u09A7\u09A4\u09BF \u0985\u09A8\u09C1\u09B8\u09B0\u09A3 \u0995\u09B0\u09BF: \u0995\u09A8\u099F\u09C7\u09A8\u09CD\u099F \u09AC\u09CB\u09A7\u0997\u09AE\u09CD\u09AF, \u09AA\u09B0\u09BF\u099A\u09BE\u09B2\u09A8\u09BE\u09AF\u09CB\u0997\u09CD\u09AF, \u09AC\u09CB\u09A7\u0997\u09AE\u09CD\u09AF \u098F\u09AC\u0982 \u09B6\u0995\u09CD\u09A4\u09BF\u09B6\u09BE\u09B2\u09C0 \u09B9\u0993\u09AF\u09BC\u09BE \u0989\u099A\u09BF\u09A4. \u0986\u09AE\u09BF alt text, \u09B9\u09C7\u09A1\u09BF\u0982, \u0995\u09C0\u09AC\u09CB\u09B0\u09CD\u09A1 \u09B8\u09BE\u09AA\u09CB\u09B0\u09CD\u099F, \u0995\u09A8\u09CD\u099F\u09CD\u09B0\u09BE\u09B8\u09CD\u099F \u098F\u09AC\u0982 \u09B8\u09B9\u099C \u09AD\u09BE\u09B7\u09BE \u09AC\u09CD\u09AF\u09AC\u09B9\u09BE\u09B0 \u0995\u09B0\u09BF.",
      botContact: "\u0986\u09AA\u09A8\u09BF \u0986\u09AE\u09BE\u09B0 \u09B8\u09BE\u09A5\u09C7 ilful360@gmail.com \u098F \u0985\u09A5\u09AC\u09BE \u0986\u09AE\u09BE\u09B0 GitHub \u09AA\u09CD\u09B0\u09CB\u09AB\u09BE\u0987\u09B2\u09C7\u09B0 \u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7 \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997 \u0995\u09B0\u09A4\u09C7 \u09AA\u09BE\u09B0\u09C7\u09A8.",
      botFallback: "\u0986\u09AE\u09BF \u0986\u09AE\u09BE\u09B0 \u09A6\u0995\u09CD\u09B7\u09A4\u09BE, \u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F, \u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF \u09AC\u09BE \u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997\u09C7\u09B0 \u09AC\u09BF\u09B8\u09CD\u09A4\u09BE\u09B0\u09BF\u09A4 \u09A4\u09A5\u09CD\u09AF \u09A8\u09BF\u09AF\u09BC\u09C7 \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09A6\u09BF\u09A4\u09C7 \u09AA\u09BE\u09B0\u09BF."
    }
  };

  translations["zh-CN"] = translations.en;
  translations.es = translations.en;
  translations.fr = translations.en;
  translations.ja = translations.en;

  var LANG_STORAGE_KEY = "md-portfolio-lang";
  var THEME_STORAGE_KEY = "md-portfolio-theme";
  var VALID_LANGS = ["en", "zh-CN", "es", "fr", "ja", "mi", "hi", "bn"];

  function getStoredLang() {
    try {
      var saved = window.localStorage.getItem(LANG_STORAGE_KEY);
      return VALID_LANGS.indexOf(saved) > -1 ? saved : "en";
    } catch (err) {
      return "en";
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (err) {
      /* localStorage unavailable — language just won't persist */
    }
  }

  var currentLang = getStoredLang();

  function getText() {
    return translations[currentLang] || translations.en;
  }

  var LANG_HTML_TAG = { en: "en-NZ", "zh-CN": "zh-CN", es: "es", fr: "fr", ja: "ja", mi: "mi", hi: "hi", bn: "bn" };

  function applyTranslations() {
    var t = getText();
    document.documentElement.lang = LANG_HTML_TAG[currentLang] || "en-NZ";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.setAttribute("placeholder", t[key]);
    });

    document.querySelectorAll("[data-lang-label]").forEach(function (el) {
      var labels = { en: "English", "zh-CN": "简体中文", es: "Español", fr: "Français", ja: "日本語", mi: "Te reo M\u0101ori", hi: "\u0939\u093F\u0928\u094D\u0926\u0940", bn: "\u09AC\u09BE\u0982\u09B2\u09BE" };
      el.textContent = labels[currentLang] || labels.en;
    });

    document.querySelectorAll("[data-lang-option]").forEach(function (btn) {
      var selected = btn.getAttribute("data-lang-option") === currentLang;
      btn.setAttribute("aria-selected", selected ? "true" : "false");
    });

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.setAttribute("aria-label", t.themeToggle);
    });

    var toggle = document.querySelector(".chat-toggle span");
    if (toggle) {
      var isOpen = document.querySelector(".chat-toggle").getAttribute("aria-expanded") === "true";
      toggle.textContent = isOpen ? t.chatClose : t.chatOpen;
    }

    resetChat();
  }

  function setLang(lang) {
    if (VALID_LANGS.indexOf(lang) === -1) return;
    currentLang = lang;
    storeLang(lang);
    applyTranslations();
  }

  function initLanguagePicker() {
    var picker = document.querySelector(".language-picker");
    if (!picker) return;
    var button = picker.querySelector(".language-button");
    var menu = picker.querySelector(".language-menu");
    if (!button || !menu) return;

    function closeMenu() {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
    }
    function openMenu() {
      menu.hidden = false;
      button.setAttribute("aria-expanded", "true");
    }

    closeMenu();

    button.addEventListener("click", function (event) {
      event.stopPropagation();
      var isOpen = button.getAttribute("aria-expanded") === "true";
      if (isOpen) closeMenu(); else openMenu();
    });

    menu.querySelectorAll("[data-lang-option]").forEach(function (option) {
      option.addEventListener("click", function () {
        setLang(option.getAttribute("data-lang-option"));
        closeMenu();
        button.focus();
      });
    });

    document.addEventListener("click", function (event) {
      if (!picker.contains(event.target)) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function getPreferredTheme() {
    try {
      var saved = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === "dark" || saved === "light") return saved;
    } catch (err) { /* ignore */ }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (err) { /* ignore */ }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme === "dark" ? "dark" : "light");
  }

  function initThemeToggle() {
    var theme = getPreferredTheme();
    applyTheme(theme);

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        storeTheme(next);
      });
    });
  }

  var chat = null;

  function initChatbot() {
    var root = document.querySelector(".chatbot");
    if (!root) return;
    var toggle = root.querySelector(".chat-toggle");
    var panel = root.querySelector(".chat-panel");
    var closeBtn = root.querySelector("[data-chat-close]");
    var form = root.querySelector(".chat-form");
    var input = root.querySelector(".chat-form input");
    var messages = root.querySelector(".chat-messages");

    chat = { messages: messages };

    function isOpen() {
      return !panel.hidden;
    }

    function updateToggleText(open) {
      var label = toggle.querySelector("span");
      if (label) label.textContent = open ? getText().chatClose : getText().chatOpen;
    }

    function openChat() {
      panel.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      updateToggleText(true);
      window.setTimeout(function () { input.focus(); }, 10);
    }

    function closeChat(returnFocus) {
      panel.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      updateToggleText(false);
      if (returnFocus !== false) toggle.focus();
    }

    panel.hidden = true;

    toggle.addEventListener("click", function (event) {
      event.stopPropagation();
      if (isOpen()) closeChat(); else openChat();
    });

    if (closeBtn) {
      closeBtn.addEventListener("click", function (event) {
        event.preventDefault();
        closeChat(false);
      }, true);

      closeBtn.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          closeChat(false);
        }
      });
    }

    document.addEventListener("click", function (event) {
      if (isOpen() && !root.contains(event.target)) {
        closeChat(false);
      }
    });

    panel.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        closeChat();
      }
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var question = input.value.trim();
      if (!question) return;
      addMessage("user", question);
      addMessage("bot", botReply(question));
      input.value = "";
    });
  }

  function addMessage(from, text) {
    if (!chat || !chat.messages) return;
    var p = document.createElement("p");
    p.className = "chat-message " + from;
    p.textContent = text;
    chat.messages.appendChild(p);
    chat.messages.scrollTop = chat.messages.scrollHeight;
  }

  function resetChat() {
    if (!chat || !chat.messages) return;
    chat.messages.innerHTML = "";
    addMessage("bot", getText().chatWelcome);
  }

  function botReply(question) {
    var q = question.toLowerCase();
    var t = getText();
    function includesAny() {
      for (var i = 0; i < arguments.length; i++) {
        if (q.indexOf(arguments[i]) > -1) return true;
      }
      return false;
    }
    if (includesAny("skill", "p\u016Bkenga", "\u0915\u094C\u0936\u0932", "\u09A6\u0995\u09CD\u09B7\u09A4\u09BE", "technology", "tech")) return t.botSkills;
    if (includesAny("project", "kaupapa", "\u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F", "\u09AA\u09CD\u09B0\u099C\u09C7\u0995\u09CD\u099F", "github", "game")) return t.botProjects;
    if (includesAny("access", "w\u0101tea", "\u0938\u0941\u0932\u092D\u0924\u093E", "\u0985\u09CD\u09AF\u09BE\u0995\u09CD\u09B8\u09C7\u09B8\u09BF\u09AC\u09BF\u09B2\u09BF\u099F\u09BF", "wcag", "keyboard")) return t.botAccessibility;
    if (includesAny("contact", "email", "whakap\u0101", "\u0938\u0902\u092A\u0930\u094D\u0915", "\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997")) return t.botContact;
    return t.botFallback;
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initLanguagePicker();
    initChatbot();
    applyTranslations();
  });
})();
