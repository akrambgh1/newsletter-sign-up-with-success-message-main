function hi() {
  document.querySelector(".box").style.display = "none";
  document.querySelector(".page-two").style.display = "flex";
  const x = document.querySelector("input").value;
  document.querySelector(".page-two b").innerHTML = x;
}
