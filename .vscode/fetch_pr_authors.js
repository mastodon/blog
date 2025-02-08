const https = require("https");

// target repo
const GITHUB_REPO = "mastodon/mastodon";

// Get GitHub Token from environment variable
const MSTDN_GH_TOKEN = process.env.MSTDN_GH_TOKEN;

if (!MSTDN_GH_TOKEN) {
  console.error("Error: MSTDN_GH_TOKEN environment variable is not set.");
  process.exit(1);
}

function getPRAuthor(prNumber) {
  const options = {
    hostname: "api.github.com",
    path: `/repos/${GITHUB_REPO}/pulls/${encodeURIComponent(prNumber)}`,
    method: "GET",
    headers: {
      "User-Agent": "VSCode-Script",
      "Authorization": `token ${MSTDN_GH_TOKEN}`
    }
  };

  https.get(options, (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      try {
        const response = JSON.parse(data);
        if (res.statusCode === 404) {
          console.error(`❌ PR #${prNumber} not found in ${GITHUB_REPO}.`);
          process.exit(1);
        }
        if (response.user && response.user.login) {
          console.log(`✅ PR #${prNumber} Author: ${response.user.login}`);
          console.log(`{{< github-pr id=${prNumber} authors="${response.user.login}" >}}`);
        } else {
          console.error("❌ Failed to fetch PR author.");
        }
      } catch (error) {
        console.error("❌ Error parsing response:", error);
      }
    });
  }).on("error", (err) => {
    console.error("❌ Network error:", err.message);
    process.exit(1);
  });
}

// Get PR number from command line arguments
const prNumber = process.argv[2];

if (!prNumber || isNaN(prNumber)) {
  console.error("❌ Usage: node fetch_pr_authors.js <PR_NUMBER>");
  process.exit(1);
}

getPRAuthor(prNumber);
