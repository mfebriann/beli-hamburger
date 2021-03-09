const checkbox = document.querySelector(".check");
const menuNav = document.querySelector("nav ul");

checkbox.addEventListener("click", function () {
   menuNav.classList.toggle("showNav");
});

const submit = document.querySelector("#submit");
const namaLengkap = document.querySelector("#nama_lengkap");
const email = document.querySelector("#email");
const pesan = document.querySelector("#pesan");
submit.addEventListener("click", function () {
   if (namaLengkap.value !== "" && email.value !== "" && pesan.value !== "") {
      alert(`Terima kasih ${namaLengkap.value} sudah mengirim pertanyaan`);
   }
});

