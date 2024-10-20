const input = document.getElementById("input");

const phoneRegex = /^(?:\+62|62|0)(8\d{8,10}|[2-9]\d{1,3}\d{6,8})$/;

function validatePhoneNumber(phoneNumber) {
  return phoneRegex.test(phoneNumber);
}

function handleInput() {
  switch (input.value) {
    case "1":
      console.log("Transfer Pulsa");
      window.location.href = "transfer-pulsa.html";
      break;
    case "2":
      console.log("Minta Pulsa");
      window.location.href = "../minta-pulsa.html";
      break;
    case "3":
      console.log("Auto TP");
      break;
    case "4":
      console.log("Delete Auto TP");
      break;
    case "5":
      console.log("List Auto TP");
      break;
    case "6":
      console.log("Cek Kupon Undian TP");
      break;
    default:
      console.log("Pilihan tidak ada");
      break;
  }
}

function handleCancel() {
  window.location.href = "index.html";
}

function handleInputAction() {
  if (validatePhoneNumber(input.value)) {
    input.style.color = "green";
    window.location.href = "success-page.html";
  } else {
    input.style.color = "red";
  }
}
