figma.showUI(__html__, { width: 400, height: 200 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "returnCode") {
    const code = msg.code;
    eval(code);
  }
};
