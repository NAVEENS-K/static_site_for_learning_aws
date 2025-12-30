document.getElementById("resume-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const resumeUrl = "https://s3-for-my-resume.s3.ap-south-1.amazonaws.com/NAVEENS_K%5B1%5D.pdf";

    window.open(resumeUrl, "_blank");
});
