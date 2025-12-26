document.getElementById("cta-btn").addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("resume-btn").addEventListener("click", () => {
    alert("Resume will be downloaded from S3 (Coming Soon)");
});
