const butInstall = document.getElementById('buttonInstall');

/*
  Here we need to provide the logic for when and how to install the PWA. 
*/

//  Keep this code as-is
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

// This listener fires when the user clicks the "install" button.
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
    return;
  }

  promptEvent.prompt();

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);

  const choiceResult = await promptEvent.userChoice;
  console.log(choiceResult.outcome);

  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
