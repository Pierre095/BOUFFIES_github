// Attendez que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const startButton = document.getElementById('start');
    const resultsSection = document.getElementById('results');

    // Écoutez le changement de fichier pour l'entrée d'image
    imageInput.addEventListener('change', handleImageChange);

    // Écoutez le clic sur le bouton Démarrer
    startButton.addEventListener('click', startScanner);

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (file) {
            // Lisez le contenu du fichier image
            const reader = new FileReader();
            reader.onload = function (e) {
                const image = new Image();
                image.src = e.target.result;

                // Détectez et décodez le code QR dans l'image
                const decodedQR = decodeQRCode(image);
                displayResult(decodedQR);
            };
            reader.readAsDataURL(file);
        }
    }

    function startScanner() {
        // Déclenchez le changement de fichier pour l'entrée d'image
        imageInput.click();
    }

    function decodeQRCode(image) {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0, image.width, image.height);

        // Obtenez les données de l'image
        const imageData = context.getImageData(0, 0, image.width, image.height);

        // Décodez le code QR à partir des données de l'image
        const code = jsQR(imageData.data, imageData.width, imageData.height);

        return code ? code.data : 'Aucun code QR détecté.';
    }

    function displayResult(result) {
        // Affichez le résultat dans la section des résultats
        resultsSection.innerHTML = `<p>Résultat du scan : ${result}</p>`;
    }
});
