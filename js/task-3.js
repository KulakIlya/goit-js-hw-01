function getElementWidth(content, padding, border) {
  const contentVal = Number.parseFloat(content);
  const paddingVal = Number.parseFloat(padding);
  const borderVal = Number.parseFloat(border);

  return contentVal + paddingVal * 2 + borderVal * 2;
}
