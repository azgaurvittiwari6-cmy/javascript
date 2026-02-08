try {
  const btn = document.getElementById("btn");

  if (!btn) {
    throw new Error("Button not found");
  }

  btn.addEventListener("click", () => {
    btn.innerText = "Submitted";
    alert("Submited")
  });

} catch (error) {
  console.error(error.message);
}
