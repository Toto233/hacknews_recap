export const SITE = {
  website: "https://www.jier.info/", // replace this with your deployed domain
  author: "Ben",
  profile: "https://www.jier.info/",
  desc: "hacknews recap",
  title: "每日黑客新闻摘要",
  ogImage: "hacknews_og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/Toto233/hacknews_recap/issues",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
