document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.querySelector('#send-message');
    const messageBox = document.querySelector('#message-box');
    const imageInput = document.querySelector('#image-input');
    const messagesContainer = document.querySelector('.messages');

    sendButton.addEventListener('click', function () {
        const message = messageBox.value;
        const image = imageInput.files[0];

        if (message.trim() || image) {
            const messageElement = document.createElement('div');

            if (message.trim()) {
                messageElement.textContent = message;
            }

            if (image) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const imgElement = document.createElement('img');
                    imgElement.src = e.target.result;
                    messageElement.appendChild(imgElement);
                }
                reader.readAsDataURL(image);
            }

            messagesContainer.appendChild(messageElement);
            messageBox.value = '';
            imageInput.value = '';  // Сбросить выбор файла
        }
    });
});
