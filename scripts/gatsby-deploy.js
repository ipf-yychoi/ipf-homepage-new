const ghpages = require("gh-pages");

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "https://github.com/ipf-dev/ipf-homepage-new.git",
  },
  () => {
    console.log("Deploy Complete!");
  }
);
