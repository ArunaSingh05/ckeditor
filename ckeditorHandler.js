

class CkeditorHandler {
  classicEditorResourceUrl = 'https://cdn.ckeditor.com/4.18.0/standard/ckeditor.js';
  classicEditorSelector = 'editor';

  initClassicCkeditor() {
    this.loadScript(this.classicEditorResourceUrl)
      .then(() => {
        const bodyEditor = CKEDITOR
          .replace(document.querySelector('#editor'),
            {
              uiColor: '#9AB8F3'
            }
          );
        // Handle when the HTML changes.
        bodyEditor.on('change', function () {
          const previewElement = document.querySelector('#preview');
          previewElement.value = CKEDITOR.instances.editor.getData();
        });
      })
  }
  loadScript(scriptPath) {
    return new Promise((resolve, reject) => {
      const hasScript = document.querySelector(`script[src="${scriptPath}"]`);
      if (hasScript) {
        return resolve('already loaded');
      }
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptPath;
      script.defer = true;
      script.onload = () => resolve('done');
      script.onerror = () => reject('failed');
      document.body.appendChild(script);
    });
  }
}