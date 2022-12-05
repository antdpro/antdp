/**
 * https://github.com/ryanseddon/react-frame-component/issues/145
 */
export const getStyles = () => {
  let head = '';
  const sheets = Array.from(document.querySelectorAll('link[rel=stylesheet]'));
  const styles = Array.from(document.querySelectorAll('head style'));

  sheets.forEach((link) => {
    head += link.outerHTML;
  });

  styles.forEach((style) => {
    head += style.outerHTML;
  });

  return head;
};

export const initialContent = () => {
  return `<!DOCTYPE html><html><head>${getStyles()}</head><body><div id="mount-antdp"></div></body></html>`;
};
