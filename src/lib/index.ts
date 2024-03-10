// place files you want to import through the `$lib` alias in this folder.

export const openQualia = () => { 
    document.querySelector('iFrame[name="stage"]').contentWindow.parent.postMessage({ type: 'call', method: 'show', arguments: { frame: 'stage' }, namespace: '__QualiaWindowMessenger__' });
}
