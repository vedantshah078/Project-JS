function calculateTotal() {
  let items = document.querySelectorAll('.item');
  let total = 0;
  let selectedItems = [];

  items.forEach(item => {
    if (item.checked) {
      total += parseInt(item.value);
      selectedItems.push(item.parentElement.innerText);
    }
  });

  if (selectedItems.length === 0) {
    document.getElementById('total').innerHTML = "Please select at least one item!";
  } else {
    document.getElementById('total').innerHTML =
      `<strong>Your Order:</strong> ${selectedItems.join(', ')} <br>
       <strong>Total Bill: ₹${total}</strong>`;
  }
}

function resetOrder() {
  document.querySelectorAll('.item').forEach(item => item.checked = false);
  document.getElementById('total').innerHTML = "";
}
