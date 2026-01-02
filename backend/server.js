const express = require("express");
const AWS = require("aws-sdk");

const app = express();
const port = 3000;

// S3 client (uses EC2 IAM role automatically)
const s3 = new AWS.S3({ region: "ap-south-1" });

app.get("/resume", async (req, res) => {
  try {
    const params = {
      Bucket: "naveens_s3_bucket_for_resume_download",
      Key: "resume.pdf",
      Expires: 60, // seconds
      ResponseContentDisposition: 'attachment; filename="resume.pdf"',
      ResponseContentType: "application/pdf"
    };

    const signedUrl = s3.getSignedUrl("getObject", params);

    // Redirect browser to S3
    res.redirect(signedUrl);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate download link");
  }
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
