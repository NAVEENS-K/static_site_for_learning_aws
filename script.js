document.getElementById("resume-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const resumeUrl = "https://naveens-resume-bucket.s3.ap-south-1.amazonaws.com/resume.pdf";

    window.open(resumeUrl, "_blank");
});
