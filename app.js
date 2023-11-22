let depositAmount = 0;
let withdrawAmount = 0;
let totalAmount = 0;

// Function to update the deposit amount
function getDepositValue() {
    const depositInput = document.getElementById("deposit");
    const depositValue = parseFloat(depositInput.value);

    if (!isNaN(depositValue) && depositValue > 0) {
        depositAmount += depositValue;
        totalAmount += depositValue;
        document.getElementById("dp").textContent = depositAmount.toFixed(2);
        updateTotalAmount();
        // Close the deposit modal
        closeModal('exampleModal');
    }

    depositInput.value = "";
}

// Function to update the withdraw amount
function getWithdrawAmount() {
    const withdrawInput = document.getElementById("withdraw");
    const withdrawValue = parseFloat(withdrawInput.value);

    if (!isNaN(withdrawValue) && withdrawValue > 0 && withdrawValue <= totalAmount) {
        withdrawAmount += withdrawValue;
        totalAmount -= withdrawValue;
        document.getElementById("wp").textContent = withdrawAmount.toFixed(2);
        updateTotalAmount();
        // Close the withdraw modal
        closeModal('exampleModal2');
    }

    withdrawInput.value = "";
}

// Function to update the total amount
function updateTotalAmount() {
    document.getElementById("tp").textContent = totalAmount.toFixed(2);
}

// Function to close the modal by ID
function closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
    bootstrapModal.hide();
}
